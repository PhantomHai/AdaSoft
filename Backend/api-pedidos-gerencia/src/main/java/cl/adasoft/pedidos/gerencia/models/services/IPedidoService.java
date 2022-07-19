package cl.adasoft.pedidos.gerencia.models.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import cl.adasoft.pedidos.gerencia.models.entity.Pedido;

public interface IPedidoService {

	public Page<Pedido> findAll(Pageable pageable);

	public Pedido save(Pedido Pedido);

	public void delete(Long id);

	public Optional<Pedido> findByCodigo(String codigo);

	public Optional<Pedido> findById(Long id);

	public Page<Pedido> findByEstado(Long estado, Pageable pageRequest);
/* 
	public Page<Pedido> getAll(Pageable pageRequest); */

	public Page<Pedido> findByRepartidor(Long repartidor, Pageable pageRequest);

	public Page<Pedido> findByCliente(Long cliente, Pageable pageRequest);
}
