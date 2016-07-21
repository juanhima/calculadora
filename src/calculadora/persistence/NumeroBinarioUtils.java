package calculadora.persistence;

import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;

/** 
 * Métodos utiles para la escritura y recuperación de los números convertidos a binario
 * 
 *
 */
public class NumeroBinarioUtils {

	
	/**
	 * Almacenamiento de un nuevo número y su equivalente en binario
	 * @param numero el número en formato decimal
	 * @param binario el número en formato binario
	 */
	public static void insert(final String numero, final String binario) {
		
		final PersistenceManager persistenceManager = PMF.get().getPersistenceManager();
		
		final NumeroBinario numeroBinario = new NumeroBinario(numero, binario);
		
		persistenceManager.makePersistent(numeroBinario);
		persistenceManager.close();
	}
	
	/**
	 * Recuperación de los todos los números binarios almacenados 
	 * @return una lista con todos los números binarios almacenados
	 */
	@SuppressWarnings("unchecked")
	public static List<NumeroBinario> getTodosNumerosBinarios() {
		
		final PersistenceManager persistenceManager = PMF.get().getPersistenceManager();
		final Query query = persistenceManager.newQuery(NumeroBinario.class);
	    
	    
	    return (List<NumeroBinario>) query.execute(); 
	}
}
