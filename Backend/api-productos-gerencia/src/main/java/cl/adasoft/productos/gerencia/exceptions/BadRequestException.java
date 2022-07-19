package cl.adasoft.productos.gerencia.exceptions;

public class BadRequestException extends RuntimeException {
    private static final String DESCRIPTION = "Bad Request Exception (400)";
	/**
	 * 
	 */
	private static final long serialVersionUID = -8168794214579908279L;

    public BadRequestException(String detail) {
        super(DESCRIPTION + ". " + detail);
    }
}
