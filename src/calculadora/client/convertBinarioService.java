package calculadora.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * The client-side stub for the RPC service.
 */
@RemoteServiceRelativePath("binario")
public interface convertBinarioService extends RemoteService {
	String calculaBinario(String name) throws IllegalArgumentException;
}
