package cl.adasoft.productos.gerencia.exceptions;

public class NotFoundException extends RuntimeException {
    private static final String DESCRIPTION = "Not Found Exception (404)";
	/**
	 * 
	 */
	private static final long serialVersionUID = 6547754850676794777L;

    public NotFoundException(String detail) {
        super(DESCRIPTION + ". " + detail);
    }
}
