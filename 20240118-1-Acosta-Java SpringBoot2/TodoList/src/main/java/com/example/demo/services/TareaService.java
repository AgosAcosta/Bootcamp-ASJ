package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import javax.sql.rowset.JoinRowSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.TareaModel;
import com.example.demo.repositories.TareaRepository;

@Service
public class TareaService {

	@Autowired //
	TareaRepository tareaRepository;

	// Obtener Tareas
	public List<TareaModel> obtenerTareas() {
		return tareaRepository.findAll(); // --> findAll() --> SELECT * FROM tareas;
	}

	// Obtener Tarea segun ID --Opcional es porque es posible que este o no el ID
	public Optional<TareaModel> obtenerTareasPorId(int id) {
		return tareaRepository.findById(id);
	}

	// Insertar Tarea -- POST

	public TareaModel crearTarea(TareaModel tarea) {

		return tareaRepository.save(tarea);
	}

	// Modificar Tarea -- PUT
	public String modificarTarea(int id, TareaModel tarea) {
		System.out.println(id);
		System.out.println(tarea);

		TareaModel t = tareaRepository.findById(id).get(); // Obtenemos tareas que coincidan con el id

		if (t != null) {
			t.setNombre(tarea.getNombre());
			t.setDescripcion(tarea.getDescripcion());
			tareaRepository.save(t);
		}

		return "Se modifico con exito";
	}

	// Eliminar Tarea

	public String eliminarTarea(int id) {
		tareaRepository.deleteById(id);
		return "Tarea eliminada correctamente";
	}
}
