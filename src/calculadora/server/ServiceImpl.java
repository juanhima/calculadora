package calculadora.server;

import java.util.List;

import calculadora.client.convertBinarioService;
import calculadora.client.ListaBinariosService;
import calculadora.persistence.NumeroBinario;
import calculadora.persistence.NumeroBinarioUtils;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server-side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class ServiceImpl extends RemoteServiceServlet implements convertBinarioService, ListaBinariosService {

	public String calculaBinario(String input) throws IllegalArgumentException {
		return convertirDecimalABinario(input);
	}
	
	private String convertirDecimalABinario(String decimal)
	{
		int dec = Integer.parseInt(decimal);
		String binario=	Integer.toBinaryString(dec);
		NumeroBinarioUtils.insert(decimal, binario);
		return binario;
	}

	public String obtenerListaBinarios() throws IllegalArgumentException {
		String resultado = "";
		List<NumeroBinario> lista = NumeroBinarioUtils.getTodosNumerosBinarios();
		for (NumeroBinario nb : lista)
		{
			resultado += "El " + nb.getNumero() + " en binario es " + nb.getBinario() + "\r\n";
		}
		return resultado;
	}
}
