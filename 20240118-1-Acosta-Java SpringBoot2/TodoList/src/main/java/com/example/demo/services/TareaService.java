package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.TareaModel;
import com.example.demo.repositories.TareaRepository;

@Service
public class TareaService {
	
	@Autowired //
	TareaRepository tareaRepository;

	//Obtener Tareas
	public List<TareaModel> obtenerTareas() {
		return tareaRepository.findAll(); // --> findAll() --> SELECT * FROM tareas;
	}
}
