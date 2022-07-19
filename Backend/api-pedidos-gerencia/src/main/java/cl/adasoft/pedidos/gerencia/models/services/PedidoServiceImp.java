package cl.adasoft.pedidos.gerencia.models.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cl.adasoft.pedidos.gerencia.models.dao.PedidoDao;
import cl.adasoft.pedidos.gerencia.models.entity.Pedido;

@Service
public class PedidoServiceImp implements IPedidoService {

	@Autowired
	private PedidoDao participantsDao;

/* 	@Override
	@Transactional
	public Page<Pedido> getAll(Pageable pageable) {
		return participantsDao.getAll(pageable);
	} */

	@Override
	@Transactional(readOnly = true)
	public Page<Pedido> findAll(Pageable pageable) {

		return participantsDao.findAll(pageable);
	}

	@Override
	@Transactional
	public Pedido save(Pedido participant) {

		return participantsDao.save(participant);
	}

	@Override
	@Transactional
	public void delete(Long id) {

		participantsDao.deleteById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<Pedido> findById(Long id) {

		return participantsDao.findById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public Page<Pedido> findByEstado(Long estado, Pageable pageRequest) {

		return participantsDao.findByEstado(estado, pageRequest);
	}

	@Override
	public Optional<Pedido> findByCodigo(String codigo) {
		return participantsDao.findByCodigo(codigo);
	}
	
	@Override
	public Page<Pedido> findByRepartidor(Long repartidor, Pageable pageRequest) {
		return participantsDao.findByRepartidor(repartidor, pageRequest);
	}

	@Override
	public Page<Pedido> findByCliente(Long cliente, Pageable pageRequest) {
		return participantsDao.findByCliente(cliente, pageRequest);
	}

}
