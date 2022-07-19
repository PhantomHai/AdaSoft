package cl.coordinador.gerencia.departamento.exceptions;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ApiExceptionHandler {

	/**
	 * Maneja el control de errores cuando el servicio no encuentra un resultado o
	 * JPA retorna null o vacío
	 * 
	 * @param request
	 * @param exception
	 * @return
	 */
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler({ NotFoundException.class })
	@ResponseBody
	public ErrorMessage notFoundRequest(HttpServletRequest request, Exception exception) {
		return new ErrorMessage(exception, request.getRequestURI());
	}

	/**
	 * Maneja el control de errores en las siguientes exception BadRequestException
	 * DuplicateKeyException HttpRequestMethodNotSupportedException
	 * MethodArgumentNotValidException MissingRequestHeaderException
	 * MethodArgumentTypeMismatchException HttpMessageNotReadableException
	 * 
	 * @param request
	 * @param exception
	 * @return
	 */
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler({ BadRequestException.class, DuplicateKeyException.class,
			HttpRequestMethodNotSupportedException.class, MethodArgumentNotValidException.class,
			MissingRequestHeaderException.class, MethodArgumentTypeMismatchException.class,
			HttpMessageNotReadableException.class })
	@ResponseBody
	public ErrorMessage badRequest(HttpServletRequest request, Exception exception) {
		return new ErrorMessage(exception, request.getRequestURI());
	}

	/**
	 * Maneja el control de errores en caso de exception del tipo InternalException
	 * 
	 * @param request
	 * @param exception
	 * @return
	 */
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler({ InternalException.class, Exception.class })
	@ResponseBody
	public ErrorMessage fatalErrorUnexpected(HttpServletRequest request, Exception exception) {
		return new ErrorMessage(exception, request.getRequestURI());
	}
}
