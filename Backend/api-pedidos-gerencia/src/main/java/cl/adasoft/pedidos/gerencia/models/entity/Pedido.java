package cl.adasoft.pedidos.gerencia.models.entity;

/* import cl.adasoft.productos.gerencia.models.entity.Producto; */
/* import cl.adasoft.productos.gerencia.models.entity.listaProductos; */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
@Entity
@Table(name = "orders")
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Column(name = "codigo")
	private String codigo;

	@NotBlank
	@Column(name = "estado")
	private Long estado;

	@NotBlank
	@Column(name = "tiempo_ingreso")
	private String tiempo_ingreso;

	@NotBlank
	@Column(name = "tiempo_estimado")
	private String tiempo_estimado;

	@NotBlank
	@Column(name = "tiempo_entrega")
	private String tiempo_entrega;

	@ElementCollection
	@Column(name = "lista_productos")
	private List<Long> listaProductos = new ArrayList<Long>();

	@NotBlank
	@Column(name = "total")
	private Long total;

	@NotBlank
	@Column(name = "cliente")
	private Long cliente;

	@Column(name = "repartidor")
	private Long repartidor;

	@NotBlank
	@Column(name = "direccion")
	private String direccion;

	@NotBlank
	@Column(name = "telefono")
	private Long telefono;

	@NotBlank
	@Column(name = "email")
	private String email;

	@NotBlank
	@Column(name = "comentario")
	private String comentario;

}
