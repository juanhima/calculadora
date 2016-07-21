package calculadora.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.RootPanel;
import com.sencha.gxt.widget.core.client.ContentPanel;
import com.sencha.gxt.widget.core.client.button.TextButton;
import com.sencha.gxt.widget.core.client.container.HtmlLayoutContainer;
import com.sencha.gxt.widget.core.client.container.MarginData;
import com.sencha.gxt.widget.core.client.event.SelectEvent;
import com.sencha.gxt.widget.core.client.event.SelectEvent.SelectHandler;
import com.sencha.gxt.widget.core.client.form.TextField;
import com.sencha.gxt.widget.core.client.container.AbstractHtmlLayoutContainer.HtmlData;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Calculadora implements EntryPoint {
	
	private ContentPanel widget;
	
	private final TextField visor = new TextField();
	private String acumulador = "";
	private float resultado = 0;
	private boolean limpiarvisor = false;
	private final TextButton binario = new TextButton("BIN");
	
	
	private final String[] idbotones = {"cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve",
		"c","ce","masmenos","porcentaje","suma","resta","multiplicacion","division","coma","igual"};
	private final String[] txBotones = {"0","1","2","3","4","5","6","7","8","9","C","CE","+/-","%","+","-","*","/",".","="};
	
	/**
	 * Creación de servicios remotos para hablar con la parte servidor del servicio
	 */
	private final ConvertBinarioServiceAsync service = GWT.create(ConvertBinarioService.class);
	private final ListaBinariosServiceAsync service2 = GWT.create(ListaBinariosService.class);
	/**
	 * Punto de entrada a la aplicación
	 */
	public void onModuleLoad() {
		
		class ManejadorBotones implements SelectHandler{

			@Override
			public void onSelect(SelectEvent event) {
				Object obj = event.getSource();
				TextButton boton = (TextButton) obj;
				if (boton.getText().equals("=") || boton.getText().equals("%"))
					calculaResultado();
				else if (boton.getText().equals("+/-"))
					cambioDeSigno();
				else if (cadenaContieneOperador(boton.getText())){
					acumularOperacion(boton);
				}
				else {
						if (limpiarvisor){
							visor.setText(boton.getText());
							limpiarvisor = false;
						}
						else visor.setText(visor.getText()+boton.getText());
				}
				acumulador+= boton.getText();
				if (boton.getText().equals("C"))
					limpiarResultado();
				if (boton.getText().equals("CE"))
				{
					if (cadenaContieneOperador(acumulador)){
						int posoper = obtenerPosicionOperador(acumulador);
						visor.setText("");
						acumulador = acumulador.substring(0, posoper+1);
					}
					else limpiarResultado();
				}
				
				if (boton.getText().equals("%")){
					float result = Float.parseFloat(visor.getText());
					result = result / 100;
					visor.setText(Float.toString(result));
					acumulador = Float.toString(result);
				}
			}
			/**
			 * Realiza la acumulación de la operación en la cadena.
			 * Se realiza cuando se elige el segundo operando
			 * @param boton
			 */
			private void acumularOperacion(TextButton boton) {
				acumulador+= boton.getText();
				limpiarvisor = true;
			}
			/**
			 * Limpia tanto la operación acumulada como el visor.
			 * Normalmente actúa al puslar la tecla C ó CE si solo hay un operando
			 */
			private void limpiarResultado() {
				visor.setText("");
				resultado = 0;
				acumulador = "";
				limpiarvisor = false;
			}
			/**
			 * Realiza los cálculos de la cadena acumulada según el signo que contiene
			 */
			private void calculaResultado() {
				
				String opiz = "";
				String opdr = "";
				String operador = "";
				
				if (!acumulador.isEmpty()){
					for (int x=0; x<acumulador.length(); x++){
						char digito = acumulador.charAt(x);
						if ((digito >= '0' && digito <= '9') || digito == '.' || digito == 'n')
						{
							if (digito == 'n')
								digito = '-';
							if (operador.isEmpty())
								opiz+= String.valueOf(digito);
							else opdr+= String.valueOf(digito);
						}
						else operador = String.valueOf(digito);
					}
					if (!opiz.isEmpty() && !opdr.isEmpty() && !operador.isEmpty()){
						float operando1 = Float.parseFloat(opiz);
						float operando2 = Float.parseFloat(opdr);
						if (operador.equals("+"))
							resultado = operando1 + operando2;
						else if (operador.equals("-"))
							resultado = operando1 - operando2;
						else if (operador.equals("*"))
							resultado = operando1 * operando2;
						else if (operador.equals("/"))
							resultado = operando1 / operando2;
						visor.setText(Float.toString(resultado));
						acumulador = visor.getText();
					}
				}
			}
			/**
			 * Cambia de signo el número mostrado en el visor, 
			 * a positivo (sin signo) o negativo según el caso.
			 */
			private void cambioDeSigno() {
				String numeroActual = visor.getText();
				int posicionOper = 0;
				if (!numeroActual.isEmpty()){
					posicionOper = obtenerPosicionOperador(acumulador);
					float cambio = Float.parseFloat(numeroActual);
					cambio = cambio*(-1);
					
					if (cambio < 0){//se marca como número negativo
						
						if (posicionOper > 0)
							acumulador = acumulador.substring(0,posicionOper+1) + "n" + cambio*(-1);
						else acumulador = "n" + acumulador;
					}//Es numero positivo
					else if (posicionOper >0) //se quita la marca de numero negativo si la tiene
						acumulador = acumulador.substring(0,posicionOper) + cambio;
					else acumulador = Float.toString(cambio);
					visor.setText(Float.toString(cambio));
				}
			}
			/**
			 * Busca en la cadena si existe alguno de los operadores
			 * @param cadena
			 * @return verdadero o falso
			 */
			private boolean cadenaContieneOperador(String cadena){
				boolean contiene = false;
				if (cadena.contains("+") || cadena.contains("-") || cadena.contains("*") || cadena.contains("/"))
					contiene = true;
				return contiene;
			}
			/**
			 * Busca en que posicion de la cadena esta el operador.
			 * @param cadena
			 * @return posicion del operador. 0 si no lo encuentra
			 */
			private int obtenerPosicionOperador(String cadena)
			{
				int posicionOper = 0;
				if (acumulador.contains("+")){
					posicionOper = acumulador.indexOf("+");
				}
				else if (acumulador.contains("-")){
					posicionOper = acumulador.indexOf("-");
				}
				else if (acumulador.contains("*")){
					posicionOper = acumulador.indexOf("*");
				}
				else if ( acumulador.contains("/")){
					posicionOper = acumulador.indexOf("/");
				}
				return posicionOper;
			}
		}
		
		final TextButton btConsulta = new TextButton("Consultar Binarios");
		PlantillaHtmlCalculadora templates = GWT.create(PlantillaHtmlCalculadora.class);
	    HtmlLayoutContainer htmlLayoutContainer = new HtmlLayoutContainer(templates.getTemplate());
		widget = new ContentPanel();
		
	    widget.setHeading("CALCULADORA");
	    widget.add(htmlLayoutContainer, new MarginData(10));
	    
		visor.setWidth(150);
		visor.setBorders(true);
		visor.setReadOnly(true);
		htmlLayoutContainer.add(visor);
		for (int x=0;x<idbotones.length;x++)
		{
			TextButton boton = new TextButton(txBotones[x]);
			boton.setSize("50", "50");
			ManejadorBotones mb = new ManejadorBotones();
			boton.addSelectHandler(mb);
			//Recoge el elemento con ese id (con get() recoge todo el body)
			//RootPanel.get(idbotones[x]).add(boton);
		    htmlLayoutContainer.add(boton,new HtmlData("." + idbotones[x]));
		}
		binario.setSize("50", "50");
		htmlLayoutContainer.add(binario,new HtmlData(".binario"));
		
	    RootPanel.get("tablaCalc").add(widget);
	    RootPanel.get("btConsulta").add(btConsulta);
				
		// Crear un manejador para el envio al servidor al pulsar la tecla BIN 
		class ManejadorBIN implements SelectHandler {
			/**
			 * Salta cuando el usuario pulsa en BIN
			 */
			@Override
			public void onSelect(SelectEvent event) {
				sendResultadoToServer();
			}

			/**
			 * Enviar el contenido de RESULTADO y esperar respuesta del servidor
			 */
			private void sendResultadoToServer() {
				String textToServer = visor.getText();

				if (!textToServer.isEmpty()){
					service.calculaBinario(textToServer, new AsyncCallback<String>() {
						public void onFailure(Throwable caught) {
							visor.setText("Error en llamada al servidor");
						}

						public void onSuccess(String resultado) {
							visor.setText(resultado);
						}
					});
				}
			}
		}
		// Añadir el manejador al boton BIN para enviar el resultado al servidor
		ManejadorBIN handler = new ManejadorBIN();
		binario.addSelectHandler(handler);
		
		class ManejadorConsulta implements SelectHandler{
			// Salta cuando el usuario pulsa en boton consultar
			@Override
			public void onSelect(SelectEvent event) {
				consultarBinarios();
			}

			private void consultarBinarios() {
				service2.obtenerListaBinarios(new AsyncCallback<String>() {
					public void onFailure(Throwable caught) {
						visor.setText("Error en llamada al servidor");
					}

					public void onSuccess(String resultado) {
						com.google.gwt.user.client.Window.alert(resultado);
					}
				});
			}
			
		}
		// Añadir el manejador al boton consulta
		ManejadorConsulta mc = new ManejadorConsulta();
		btConsulta.addSelectHandler(mc);
	}
}
