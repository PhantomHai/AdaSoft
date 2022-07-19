package cl.adasoft.usuarios.gerencia.models.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import cl.adasoft.usuarios.gerencia.models.entity.Persona;

public interface IPersonaService {
	
	public Page<Persona> findAll(Pageable pageable);
	
	public Persona save(Persona persona);
	
	public void delete(Long id);	
	
	public Persona findByRut(Long rut);
	
	public Optional<Persona> findById(Long rut);

    public Optional<Persona> findByUsername(String username);

    public Page<Persona> findByType(Long type, Pageable pageRequest);

	public Optional<Persona> findByUsernameAndPassword(String username, String password);
}
