package cl.coordinador.gerencia.departamento.models.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import cl.coordinador.gerencia.departamento.models.entity.Persona;

public interface PersonaDao extends PagingAndSortingRepository<Persona,Long> {
	
	  @Query("select p from Persona p where p.rut=?1")
	  public Persona findByRut(Long rut);

	  
	  
}
