package calculadora.client;

import com.google.gwt.safehtml.shared.SafeHtml;
import com.sencha.gxt.core.client.XTemplates;
import com.sencha.gxt.core.client.XTemplates.XTemplate;

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