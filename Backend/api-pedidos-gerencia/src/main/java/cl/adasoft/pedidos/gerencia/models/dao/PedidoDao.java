package cl.adasoft.pedidos.gerencia.models.dao;

import java.util.Optional;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import cl.adasoft.pedidos.gerencia.models.entity.Pedido;

public interface PedidoDao extends PagingAndSortingRepository<Pedido, Long> {

	@Query("select p from Pedido p where p.codigo=?1")
	public Optional<Pedido> findByCodigo(String codigo);

	@Query("select p from Pedido p where p.estado=?1")
	public Page<Pedido> findByEstado(Long estado, org.springframework.data.domain.Pageable pageable);
/* 
	@Query("select p from Pedido p")
	public Page<Pedido> getAll(org.springframework.data.domain.Pageable pageRequest); */

	@Query("select p from Pedido p where p.repartidor=?1")
	public Page<Pedido> findByRepartidor(Long repartidor, org.springframework.data.domain.Pageable pageRequest);

	@Query("select p from Pedido p where p.cliente=?1")
	public Page<Pedido> findByCliente(Long cliente, org.springframework.data.domain.Pageable pageRequest);
}
