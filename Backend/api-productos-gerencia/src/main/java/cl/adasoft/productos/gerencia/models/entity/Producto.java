package cl.adasoft.productos.gerencia.models.entity;

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
@Table(name="products")
public class Producto {

	@NotBlank
	@Column(name = "descripcion")
	private String descripcion;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(min = 10, max = 100, message = "The name cannot exceed 100 characters")
	@Column(name="nombre", nullable = false)
	private String nombre;

	@NotBlank
	@Column(name = "precio")
	private Long precio;

	@NotBlank
	@Column(name = "codigo")
	private Long codigo;

	@NotBlank
	@Column(name="stock", nullable = false)
	private Long stock;

	@NotBlank
	@Column(name="categoria", nullable = false)
	private String categoria;

	@NotBlank
	@Column(name = "imagen")
	private String imagen;

}