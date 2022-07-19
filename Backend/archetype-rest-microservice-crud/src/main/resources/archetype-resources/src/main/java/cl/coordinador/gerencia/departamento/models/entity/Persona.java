package cl.coordinador.gerencia.departamento.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;


@Data 
@Entity
@Table(name="persona")
public class Persona {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(min = 10, max = 100, message = "The name cannot exceed 100 characters")
	@Column(name="name")
	private String name;
	
	@Column(name="rut")
	private Long rut;
	
}
