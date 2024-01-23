package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "videos")
public class VideoModels {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String url;
	private String nombre;
	private String categoria;
	private String descripcion;
	private Integer cantidadVistas;
	private Integer cantidadMeGusta;
	private Integer cantidadNoMeGusta;
	
	public VideoModels(Integer id, String url, String nombre, String categoria, String descripcion, Integer cantidadVistas,
			Integer cantidadMeGusta, Integer cantidadNoMeGusta) {	
		this.id = id;
		this.url = url;
		this.nombre = nombre;
		this.categoria = categoria;
		this.descripcion = descripcion;
		this.cantidadVistas = cantidadVistas;
		this.cantidadMeGusta = cantidadMeGusta;
		this.cantidadNoMeGusta = cantidadNoMeGusta;
	}

	public VideoModels() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getCantidadVistas() {
		return cantidadVistas;
	}

	public void setCantidadVistas(Integer cantidadVistas) {
		this.cantidadVistas = cantidadVistas;
	}

	public Integer getCantidadMeGusta() {
		return cantidadMeGusta;
	}

	public void setCantidadMeGusta(Integer cantidadMeGusta) {
		this.cantidadMeGusta = cantidadMeGusta;
	}

	public Integer getCantidadNoMeGusta() {
		return cantidadNoMeGusta;
	}

	public void setCantidadNoMeGusta(Integer cantidadNoMeGusta) {
		this.cantidadNoMeGusta = cantidadNoMeGusta;
	}
	
	
	
}
