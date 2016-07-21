package calculadora.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface ListaBinariosServiceAsync {
	void obtenerListaBinarios(AsyncCallback<String> asyncCallback)
			throws IllegalArgumentException;

}
