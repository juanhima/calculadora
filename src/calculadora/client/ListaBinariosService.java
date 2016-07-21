package calculadora.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("consulta")
public interface ListaBinariosService extends RemoteService {
	String obtenerListaBinarios() throws IllegalArgumentException;
}