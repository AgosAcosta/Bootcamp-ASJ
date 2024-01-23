package com.example.demo.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.VideoModels;

@Repository
public interface VideoRepository extends JpaRepository<VideoModels, Integer>{

	@Query("SELECT v FROM VideoModels v WHERE v.nombre LIKE %:nombre%")
	List<VideoModels> findByNombreContaining(@Param("nombre") String nombre);
	
	@Query("SELECT v FROM VideoModels v WHERE v.categoria LIKE %:categoria%")
	List<VideoModels> findByCategoriaContaining(@Param("categoria") String categoria);
}
