package cl.adasoft.pedidos.gerencia.exceptions;

public class NotFoundException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 6547754850676794777L;
	private static final String DESCRIPTION = "Not Found Exception (404)";

    public NotFoundException(String detail) {
        super(DESCRIPTION + ". " + detail);
    }

    
}
