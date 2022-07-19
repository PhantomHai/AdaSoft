package cl.adasoft.productos.gerencia.exceptions;

public class InternalException extends RuntimeException {

	private static final String DESCRIPTION = "Internal Server Error (500)";
	/**
	 * 
	 */
	private static final long serialVersionUID = 9206634091062027509L;

	public InternalException(String detail) {
		super(DESCRIPTION + ". " + detail);
	}
}
