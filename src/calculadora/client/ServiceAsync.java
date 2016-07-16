package calculadora.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The async counterpart of <code>GreetingService</code>.
 */
public interface ServiceAsync {
	void calculaBinario(String input, AsyncCallback<String> callback)
			throws IllegalArgumentException;
}
