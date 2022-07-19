package cl.coordinador.gerencia.departamento.exceptions;

public class InternalException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 9206634091062027509L;
	private static final String DESCRIPTION = "Internal Server Error (500)";

	public InternalException(String detail) {
		super(DESCRIPTION + ". " + detail);
	}
}
