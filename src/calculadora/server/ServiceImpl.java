package calculadora.server;

import calculadora.client.Service;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server-side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class ServiceImpl extends RemoteServiceServlet implements Service {

	public String calculaBinario(String input) throws IllegalArgumentException {
		return convertirDecimalABinario(input);
	}
	
	private String convertirDecimalABinario(String decimal)
	{
		int dec = Integer.parseInt(decimal);
		String binario=	Integer.toBinaryString(dec);
		return binario;
	}
}
