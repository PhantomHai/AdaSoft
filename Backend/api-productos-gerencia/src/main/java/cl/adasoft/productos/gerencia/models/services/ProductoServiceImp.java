package cl.adasoft.productos.gerencia.models.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cl.adasoft.productos.gerencia.models.dao.ProductoDao;
import cl.adasoft.productos.gerencia.models.entity.Producto;

@Service
public class ProductoServiceImp implements IProductoService {

	@Autowired
	private ProductoDao participantsDao;

	@Override
	@Transactional
	public void delete(Long id) {

		participantsDao.deleteById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public Page<Producto> findAll(Pageable pageable) {

		return participantsDao.findAll(pageable);
	}

	@Override
	public Page<Producto> findByCategoria(String categoria, Pageable pageRequest) {
		// TODO Auto-generated method stub
		return participantsDao.findByCategoria(categoria, pageRequest);
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<Producto> findById(Long id) {

		return participantsDao.findById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public Page<Producto> findByNombre(String nombre, Pageable pageable) {

		return participantsDao.findByNombre(nombre, pageable);
	}

	@Override
	public Page<Producto> findByPrecio(Long precio, Pageable pageRequest) {
		// TODO Auto-generated method stub
		return participantsDao.findByPrecio(precio, pageRequest);	}

	@Override
	public Page<Producto> findByStock(Long cantidad, Pageable pageRequest) {
		// TODO Auto-generated method stub
		return participantsDao.findByStock(cantidad, pageRequest);
	}

	@Override
	@Transactional
	public Producto save(Producto participant) {

		return participantsDao.save(participant);
	}

	@Override
	public Page<Producto> findByCodigo(Long codigo, Pageable pageRequest) {
		return participantsDao.findByCodigo(codigo, pageRequest);
	}

}
