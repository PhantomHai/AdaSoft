package cl.adasoft.pedidos.gerencia.controllers;

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
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cl.adasoft.pedidos.gerencia.exceptions.NotFoundException;
import cl.adasoft.pedidos.gerencia.models.entity.Pedido;
import cl.adasoft.pedidos.gerencia.models.services.IPedidoService;
/* import cl.adasoft.productos.gerencia.models.entity.Producto; */
import org.springframework.web.bind.annotation.PathVariable;

import io.swagger.v3.oas.annotations.Operation;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class PedidoController {

/* 	public Producto producto; */

	@Autowired
	private IPedidoService participantService;

/* 	@Operation(summary = "Obtener todos los pedidos", description = "Obtener todos los pedidos")
	@GetMapping("/findPedidos")
	public ResponseEntity<Page<Pedido>> getAll(@RequestParam(value = "page", defaultValue = "0") int page,
			@RequestParam(value = "size", defaultValue = "50") int size) {
		Pageable pageable = PageRequest.of(page, size, org.springframework.data.domain.Sort.by("id"));
		Page<Pedido> pedidos = participantService.findAll(pageable);
		return new ResponseEntity<>(pedidos, HttpStatus.OK);
	} */

	@GetMapping("/findAll")
	@Operation(summary = "Get users by name", description = "Returns the users filtered by name")
	public Page<Pedido> findAll(@RequestParam(name = "page", defaultValue = "0") int page) {

		Pageable pageRequest = PageRequest.of(page, 5);
		Page<Pedido> participants = participantService.findAll(pageRequest); // para obtener todos los participantes
		return participants; // para retornar los participantes

	}

	@PostMapping("/create") // para indicarle a spring que es una peticion post
	public ResponseEntity<Pedido> save(@RequestBody Pedido pedido) {

		return new ResponseEntity<>(participantService.save(pedido), HttpStatus.CREATED); // para retornar el objeto
																							// Pedido y el codigo de
																							// estado
	}

	@DeleteMapping("/delete/{id}") // para indicarle a spring que es una peticion delete
	public void update(@PathVariable Long id) {

		participantService.delete(id); // para eliminar el objeto Pedido
	}

	@GetMapping("/findById/{id}")
	public Optional<Pedido> findById(@PathVariable Long id) {
		Optional<Pedido> response = participantService.findById(id);

		if (response == null) {
			throw new NotFoundException("participant id: " + id);
		}

		return response;
	}

	@PutMapping("/update")
	public ResponseEntity<Pedido> update(@RequestBody Pedido pedido) {
		return new ResponseEntity<>(participantService.save(pedido), HttpStatus.CREATED);
	}

	@GetMapping("/findByCodigo/{codigo}")
	public Optional<Pedido> findByCodigo(@PathVariable String codigo) {
		Optional<Pedido> response = participantService.findByCodigo(codigo);

		if (response == null) {
			throw new NotFoundException("participant codigo: " + codigo);
		}

		return response;
	}

	@GetMapping("/findByEstado/{estado}")
	public Page<Pedido> findByEstado(@RequestParam(name = "page", defaultValue = "0") int page, @PathVariable Long estado) {
		Pageable pageRequest = PageRequest.of(page, 5);
		Page<Pedido> response = participantService.findByEstado(estado, pageRequest);

		return response;
	}

	@GetMapping("/findByRepartidor/{repartidor}")
	public Page<Pedido> findByRepartidor(@RequestParam(name = "page", defaultValue = "0") int page,
			@PathVariable Long repartidor) {
		Pageable pageRequest = PageRequest.of(page, 5);
		Page<Pedido> response = participantService.findByRepartidor(repartidor, pageRequest);

		return response;
	}

	@GetMapping("/findByCliente/{cliente}")
	public Page<Pedido> findByCliente(@RequestParam(name = "page", defaultValue = "0") int page,
			@PathVariable Long cliente) {
		Pageable pageRequest = PageRequest.of(page, 5);
		Page<Pedido> response = participantService.findByCliente(cliente, pageRequest);

		return response;
	}

	@PatchMapping("/updateEstado/{id}")
	public ResponseEntity<Pedido> patch(@RequestBody Pedido pedido) {
		return new ResponseEntity<>(participantService.save(pedido), HttpStatus.CREATED);
	}

	@PatchMapping("/updateSoft")
	public ResponseEntity<Pedido> updateSoft(@RequestBody Pedido pedido) {
		return new ResponseEntity<>(participantService.save(pedido), HttpStatus.CREATED);
	}

}
