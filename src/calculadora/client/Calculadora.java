package calculadora.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.sencha.gxt.widget.core.client.ContentPanel;
import com.sencha.gxt.widget.core.client.Dialog;
import com.sencha.gxt.widget.core.client.button.TextButton;
import com.sencha.gxt.widget.core.client.container.HtmlLayoutContainer;
import com.sencha.gxt.widget.core.client.container.MarginData;
import com.sencha.gxt.widget.core.client.event.SelectEvent;
import com.sencha.gxt.widget.core.client.event.SelectEvent.SelectHandler;
import com.sencha.gxt.widget.core.client.form.FieldLabel;
import com.sencha.gxt.widget.core.client.form.TextField;
import com.sencha.gxt.core.client.XTemplates;
import com.sencha.gxt.widget.core.client.container.AbstractHtmlLayoutContainer.HtmlData;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Calculadora implements EntryPoint {
	
	public interface HtmlLayoutContainerTemplate extends XTemplates {
	    @XTemplate("<table id=\"tablaCalc\" align=\"center\">" +
      "<tr>" +
        "<td id=\"resultado\" colspan=\"3\" style=\"font-weight:bold;\" class=\"resultado\"></td>" +
        "<td></td>" +
        "<td></td>" +        
      "</tr>" +
      "<tr>" +
        "<td id=\"siete\" class=\"siete\"></td>" +
        "<td id=\"ocho\" class=\"ocho\"></td>" +
        "<td id=\"nueve\" class=\"nueve\"></td>" +
        "<td id=\"masmenos\" class=\"masmenos\"></td>" +
        "<td id=\"porcentaje\" class=\"porcentaje\"></td>" +
      "</tr>" +
      "<tr>" +
        "<tr>" +
        "<td id=\"cuatro\" class=\"cuatro\"></td>" +
        "<td id=\"cinco\" class=\"cinco\"></td>" +
        "<td id=\"seis\" class=\"seis\"></td>" +
        "<td id=\"suma\" class=\"suma\"></td>" +
        "<td id=\"resta\" class=\"resta\"></td>" +
      "</tr>" +
      "<tr>" +
        "<td id=\"uno\" class=\"uno\"></td>" +
        "<td id=\"dos\" class=\"dos\"></td>" +
        "<td id=\"tres\" class=\"tres\"></td>" +
        "<td id=\"multiplicacion\" class=\"multiplicacion\"></td>" +
        "<td id=\"division\" class=\"division\"></td>" +
      "</tr>" +
      "<tr>" +
        "<td id=\"cero\" class=\"cero\"></td>" +
        "<td id=\"coma\" class=\"coma\"></td>" +
        "<td></td>" +
        "<td id=\"binario\" class=\"binario\"></td>" +
        "<td id=\"igual\" class=\"igual\"></td>" +
      "</tr>" +
    "</table>")
	    SafeHtml getTemplate();
	}
	private ContentPanel widget;
	
	final TextField resultado = new TextField();
	final TextButton binario = new TextButton("BIN");
	
	final String[] idbotones = {"cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve",
		"masmenos","porcentaje","suma","resta","multiplicacion","division","coma","igual"};
	final String[] txBotones = {"0","1","2","3","4","5","6","7","8","9","+/-","%","+","-","*","/",".","="};
	
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
		
		final Label errorLabel = new Label();

		HtmlLayoutContainerTemplate templates = GWT.create(HtmlLayoutContainerTemplate.class);
	    HtmlLayoutContainer htmlLayoutContainer = new HtmlLayoutContainer(templates.getTemplate());
		widget = new ContentPanel();
		
	    widget.setHeading("CALCULADORA");
	    widget.add(htmlLayoutContainer, new MarginData(10));
	    
		resultado.setWidth(200);
		resultado.setBorders(true);
		resultado.setReadOnly(true);
		htmlLayoutContainer.add(resultado);
		for (int x=0;x<idbotones.length;x++)
		{
			TextButton boton = new TextButton(txBotones[x]);
			boton.setSize("50", "50");
			
			//Recoge el elemento con ese id (con get() recoge todo el body)
			//RootPanel.get(idbotones[x]).add(boton);
		    htmlLayoutContainer.add(boton,new HtmlData("." + idbotones[x]));
		}
		binario.setSize("50", "50");
		htmlLayoutContainer.add(binario,new HtmlData(".binario"));
		
	    RootPanel.get("tablaCalc").add(widget);
		// Se focaliza el cursor en resultado
		resultado.setSelectOnFocus(true);

		
		
		
		// Create the popup dialog box
		final Dialog dialogBox = new Dialog();
		dialogBox.setTitle("Llamada a procedimiento remoto");
		dialogBox.setDraggable(true);
		final TextButton botonSalir = new TextButton("Cerrar");
		// We can set the id of a widget by accessing its Element
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
		class Manejador implements SelectHandler {
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
				String textToServer = resultado.getText();

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
						}

						public void onSuccess(String result) {
							dialogBox.setTitle("Llamada a procedimiento remoto");
							serverResponseLabel.removeStyleName("serverResponseLabelError");
							resultado.setText(result);
						}
					});
				}
			}
		}
		// Añadir un manejador para enviar el resultado al servidor
		Manejador handler = new Manejador();
		binario.addSelectHandler(handler);
		//resultado.addKeyUpHandler(handler);
	}
}
