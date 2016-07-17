package calculadora.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.sencha.gxt.widget.core.client.ContentPanel;
import com.sencha.gxt.widget.core.client.Dialog;
import com.sencha.gxt.widget.core.client.button.TextButton;
import com.sencha.gxt.widget.core.client.container.HtmlLayoutContainer;
import com.sencha.gxt.widget.core.client.container.MarginData;
import com.sencha.gxt.widget.core.client.event.SelectEvent;
import com.sencha.gxt.widget.core.client.event.SelectEvent.SelectHandler;
import com.sencha.gxt.widget.core.client.form.FieldLabel;
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
	 * Mensaje cuando no se conecta con el servidor
	 */
	private static final String SERVER_ERROR = "Ha ocurrido un error mientras "
			+ "se intentaba contactar con el servidor. Por favor, compruebe su conexión "
			+ "e inténtelo de nuevo";

	/**
	 * Creación de un servicio remoto para hablar con la parte servidor del servicio
	 */
	private final ServiceAsync service = GWT.create(Service.class);

	/**
	 * Punto de entrada a la aplicación
	 */
	public void onModuleLoad() {
		
		class ManejadorBotones implements SelectHandler{

			@Override
			public void onSelect(SelectEvent event) {
				Object obj = event.getSource();
				TextButton boton = (TextButton) obj;
				if (boton.getText().equals("="))
					calculaResultado();
				else if (boton.getText().equals("+/-"))
					cambioDeSigno();
				else if (boton.getText().equals("+") || boton.getText().equals("-") || boton.getText().equals("*") || boton.getText().equals("/"))
					acumularOperacion(boton);
				else {
					if (limpiarvisor){
						visor.setText(boton.getText());
						limpiarvisor = false;
					}
					else visor.setText(visor.getText()+boton.getText());
				}
				acumulador+= boton.getText();
				if (boton.getText().equals("C") || boton.getText().equals("CE"))
					limpiarResultado();
			}

			private void acumularOperacion(TextButton boton) {
				acumulador+= boton.getText();
				limpiarvisor = true;
			}

			private void limpiarResultado() {
				visor.setText("");
				resultado = 0;
				acumulador = "";
				limpiarvisor = false;
			}

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

			private void cambioDeSigno() {
				String numeroActual = visor.getText();
				int posicionOper = 0;
				if (!numeroActual.isEmpty()){
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
					float cambio = Float.parseFloat(numeroActual);
					cambio = cambio*(-1);
					
					if (cambio < 0){//se marca como número negativo
						
						if (posicionOper > 0)
							acumulador = acumulador.substring(0,posicionOper) + "n" + cambio*(-1);
						else acumulador = "n" + acumulador;
					}//Es numero positivo
					else if (posicionOper >0) //se quita la marca de numero negativo si la tiene
						acumulador = acumulador.substring(0,posicionOper) + cambio;
					else acumulador = Float.toString(cambio);
					visor.setText(Float.toString(cambio));
				}
			}
		}
		
		final Label errorLabel = new Label();

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
		// Se focaliza el cursor en resultado
		visor.setSelectOnFocus(true);
		
		// Caja de dialogo para verificar la llamada al servidor
		final Dialog dialogBox = new Dialog();
		dialogBox.setTitle("Llamada a procedimiento remoto");
		dialogBox.setDraggable(true);
		final TextButton botonSalir = new TextButton("Cerrar");
		
		botonSalir.getElement().setId("botonCerrar");
		final FieldLabel textToServerLabel = new FieldLabel();
		final HTML serverResponseLabel = new HTML();
		VerticalPanel dialogVPanel = new VerticalPanel();
		dialogVPanel.addStyleName("dialogVPanel");
		dialogVPanel.add(new HTML("<b>Enviando datos al servidor:</b>"));
		dialogVPanel.add(textToServerLabel);
		dialogVPanel.add(new HTML("<br><b>Respuesta servidor:</b>"));
		dialogVPanel.add(serverResponseLabel);
		dialogVPanel.setHorizontalAlignment(VerticalPanel.ALIGN_RIGHT);
		dialogVPanel.add(botonSalir);
		dialogBox.setWidget(dialogVPanel);

				
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
				errorLabel.setText("");
				String textToServer = visor.getText();

				if (!textToServer.isEmpty()){
					textToServerLabel.setText(textToServer);
					serverResponseLabel.setText("");
					service.calculaBinario(textToServer, new AsyncCallback<String>() {
						public void onFailure(Throwable caught) {
							dialogBox.setTitle("Llamada a procedimiento - Erronea");
							serverResponseLabel.addStyleName("serverResponseLabelError");
							serverResponseLabel.setHTML(SERVER_ERROR);
							dialogBox.center();
							botonSalir.focus();
							visor.setText("error en llamada");
						}

						public void onSuccess(String result) {
							dialogBox.setTitle("Llamada a procedimiento remoto");
							serverResponseLabel.removeStyleName("serverResponseLabelError");
							visor.setText("La llamada es ok");
						}
					});
				}
			}
		}
		// Añadir el manejador para enviar el resultado al servidor
		ManejadorBIN handler = new ManejadorBIN();
		binario.addSelectHandler(handler);
	}
}
