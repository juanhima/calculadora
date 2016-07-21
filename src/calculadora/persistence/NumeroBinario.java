package calculadora.persistence;

/**
 * Clase persistente que almacena los datos de los números convertidos a binario
 */
 
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class NumeroBinario {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private String numero;

	@Persistent
	private String binario;

	public NumeroBinario(final String numero, final String binario) {
		this.numero = numero;
		this.binario = binario;
	}

	public String getNumero() {
		return numero;
	}

	public String getBinario() {
		return binario;
	}

	@Override
	public String toString() {
		return " "+ numero + "--" + binario + " ";
	}

	
}