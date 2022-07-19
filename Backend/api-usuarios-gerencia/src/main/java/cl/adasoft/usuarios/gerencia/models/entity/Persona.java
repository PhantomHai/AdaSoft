package cl.adasoft.usuarios.gerencia.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;


@Data 
@Entity
@Table(name="users")
public class Persona {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(min = 10, max = 100, message = "The name cannot exceed 100 characters")
<<<<<<< HEAD
	@Column(name="username", unique = true, nullable = false)
=======
	@Column(name="username", unique = true)
>>>>>>> hai
	private String username;

	@NotBlank
	@Size(min = 8, max = 16, message = "The password must be between 8 and 16 characters")
	@Column(name="password")
	private String password;
	
	@NotBlank
	@Column(name="type", nullable = false)
	private Long type;

	@NotBlank
	@Column(name="rut", unique = true)
	private Long rut;

	@Column(name="direccion")
	private String direccion;
	
	@Column(name="email", unique = true)
	@Email
	private String email;

	@NotBlank
	@Column(name="telefono", unique = true)
	private Long telefono;

	@Column(name="nombre")
	private String nombre;

	@Column(name="apellido")
	private String apellido;

	@Column(name="estado")
	private Long estado;

	@Column(name="fecha_nacimiento")
	private String fecha_nacimiento;

	@Column(name="fecha_ingreso")
	private String fecha_ingreso;

	@Column(name="fecha_salida")
	private String fecha_salida;
	
	@Column(name="patente", unique = true)
	private String patente;
}
