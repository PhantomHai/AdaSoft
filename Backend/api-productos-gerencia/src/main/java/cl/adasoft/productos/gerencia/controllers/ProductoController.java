package cl.adasoft.productos.gerencia.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cl.adasoft.productos.gerencia.exceptions.NotFoundException;
import cl.adasoft.productos.gerencia.models.entity.Producto;
import cl.adasoft.productos.gerencia.models.services.IProductoService;
import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ProductoController {

	@Autowired
	private IProductoService participantService;

	@GetMapping("/findAll")
	@Operation(summary = "Get users by name", description = "Returns the users filtered by name")
	public Page<Producto> findAll(@RequestParam(name = "page", defaultValue = "0") int page) {

		Pageable pageRequest = PageRequest.of(page, 10, org.springframework.data.domain.Sort.by("id"));
		Page<Producto> participants = participantService.findAll(pageRequest);
		return participants;

	}

	@GetMapping("/findByCategoria/{categoria}")
	public Page<Producto> findByCategoria(@PathVariable String categoria,
			@RequestParam(name = "page", defaultValue = "0") int page) {

		Pageable pageRequest = PageRequest.of(page, 50, org.springframework.data.domain.Sort.by("id"));
		Page<Producto> participants = participantService.findByCategoria(categoria, pageRequest);
		return participants;

	}

	@GetMapping("/findById/{id}")
	public Optional<Producto> findById(@PathVariable Long id) {
		Optional<Producto> response = participantService.findById(id);

		if (response == null) {
			throw new NotFoundException("participant id: " + id);
		}

		return response;
	}

	@GetMapping("/findByNombre/{nombre}")
	public Page<Producto> findByNombre(@PathVariable String nombre,
			@RequestParam(name = "page", defaultValue = "0") int page) {

		Pageable pageRequest = PageRequest.of(page, 5);
		Page<Producto> participants = participantService.findByNombre(nombre, pageRequest);
		return participants;

	}

	@GetMapping("/findByPrecio/{precio}")
	public Page<Producto> findByPrecio(@PathVariable Long precio,
			@RequestParam(name = "page", defaultValue = "0") int page) {

		Pageable pageRequest = PageRequest.of(page, 5);
		Page<Producto> participants = participantService.findByPrecio(precio, pageRequest);
		return participants;

	}

	@GetMapping("/findByStock/{stock}")
	public Page<Producto> findByStock(@PathVariable Long stock,
			@RequestParam(name = "page", defaultValue = "0") int page) {

		Pageable pageRequest = PageRequest.of(page, 5);
		Page<Producto> participants = participantService.findByStock(stock, pageRequest);
		return participants;

	}

	@PostMapping("/create")
	public ResponseEntity<Producto> save(@RequestBody Producto producto) {

		return new ResponseEntity<>(participantService.save(producto), HttpStatus.CREATED);
	}

<<<<<<< HEAD:Backend/api-productos-gerencia/src/main/java/cl/adasoft/departamento/gerencia/controllers/ProductoController.java
	@GetMapping("/findByCodigo/{codigo}")
	public Page<Producto> findByCodigo(@PathVariable Long codigo,
			@RequestParam(name = "page", defaultValue = "0") int page) {
=======
	@DeleteMapping("/delete/{id}")
	public void update(@PathVariable Long id) {
>>>>>>> hai:Backend/api-productos-gerencia/src/main/java/cl/adasoft/productos/gerencia/controllers/ProductoController.java

		participantService.delete(id);
	}

	@PutMapping("/update")
	public ResponseEntity<Producto> update(@RequestBody Producto producto){
		return new ResponseEntity<>(participantService.save(producto),HttpStatus.CREATED);
	}
}
