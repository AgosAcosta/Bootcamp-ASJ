package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.TareaModel;
import com.example.demo.services.TareaService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/tareas")
public class TareaController {
	@Autowired
	TareaService tareaService;

	@GetMapping("/test")
	public ResponseEntity<String> testing() {		
		return ResponseEntity.ok("Hola!");
		//return new ResponseEntity<>("Hola!",HttpStatus.OK);
	}
	
	@GetMapping()
	public ResponseEntity<List<TareaModel>> getTareas() {
		return ResponseEntity.ok(tareaService.obtenerTareas());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<TareaModel>> getTareasById(@PathVariable int id) {
		return  ResponseEntity.ok(tareaService.obtenerTareasPorId(id));
	}
	
	@PostMapping()
	public TareaModel createTarea(@RequestBody TareaModel tarea) {
	    return tareaService.crearTarea(tarea);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateTarea(@PathVariable int id, @RequestBody TareaModel tarea) {
		return ResponseEntity.ok(tareaService.modificarTarea(id, tarea));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTarea(@PathVariable int id) {
		return ResponseEntity.ok(tareaService.eliminarTarea(id));
	}
	
}
