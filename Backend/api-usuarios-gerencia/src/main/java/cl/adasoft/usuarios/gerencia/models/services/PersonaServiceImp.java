package cl.adasoft.usuarios.gerencia.models.services;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cl.adasoft.usuarios.gerencia.models.dao.PersonaDao;
import cl.adasoft.usuarios.gerencia.models.entity.Persona;


@Service
public class PersonaServiceImp implements IPersonaService {

	@Autowired
	private PersonaDao participantsDao;
	
	
	@Override
	@Transactional(readOnly = true)
	public Page<Persona> findAll(Pageable pageable) {

		return participantsDao.findAll(pageable);
	}

	@Override
	@Transactional
	public Persona save(Persona participant) {
		
		return participantsDao.save(participant);
	}

	@Override
	@Transactional
	public Optional<Persona> findByUsernameAndPassword(String username, String password) {
		
		return participantsDao.findByUsernameAndPassword(username, password);
	}
	
	@Override
	@Transactional
	public void delete(Long id) {
		
		participantsDao.deleteById(id);
	}	

	@Override
	@Transactional(readOnly = true)
	public Persona findByRut(Long rut) {
		
		return participantsDao.findByRut(rut);
	}
	
	
	@Override
	@Transactional(readOnly = true)
	public Optional<Persona> findById(Long rut) {
		
		return participantsDao.findById(rut);
	}	

	@Override
	@Transactional(readOnly = true)
	public Optional<Persona> findByUsername(String username) {
		
		return participantsDao.findByUsername(username);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Page<Persona> findByType(Long type, Pageable pageRequest) {
		
		return participantsDao.findByType(type, pageRequest);
	}
	
}
