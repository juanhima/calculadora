package calculadora.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The async counterpart of <code>Service</code>.
 */
public interface convertBinarioServiceAsync {
	void calculaBinario(String input, AsyncCallback<String> callback)
			throws IllegalArgumentException;
}
