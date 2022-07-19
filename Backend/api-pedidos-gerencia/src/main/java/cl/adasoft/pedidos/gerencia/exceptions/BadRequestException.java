package cl.adasoft.pedidos.gerencia.exceptions;

public class BadRequestException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = -8168794214579908279L;
	private static final String DESCRIPTION = "Bad Request Exception (400)";

    public BadRequestException(String detail) {
        super(DESCRIPTION + ". " + detail);
    }
}
