package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.VideoModels;
import com.example.demo.repositories.VideoRepository;

@Service
public class VideoServices {

	@Autowired
	VideoRepository videoRepository;

	public List<VideoModels> obtenerVideos() {
		return videoRepository.findAll();
	}

	public Optional<VideoModels> obtenerVideoById(int id) {
		Optional<VideoModels> videoOptional = videoRepository.findById(id);
		videoOptional.ifPresent(video -> {
			video.setCantidadVistas(video.getCantidadVistas() + 1);
			videoRepository.save(video);
		});
		return videoOptional;
	}

	public VideoModels postVideo(VideoModels video) {
		return videoRepository.save(video);
	}

	public String borrarVideo(int id) {
		videoRepository.deleteById(id);
		return "Video eliminado correctamente";
	}

	public VideoModels incrementar(int id, VideoModels video) {
		Optional<VideoModels> videoOptional = videoRepository.findById(id);
		if (videoOptional.isPresent()) {
			VideoModels v = videoOptional.get();
			v.setCantidadMeGusta(video.getCantidadMeGusta());
			v.setCantidadNoMeGusta(video.getCantidadNoMeGusta());
			return videoRepository.save(video);
		} else {
			return null;
		}
	}
	
	public List<VideoModels> filtrarNombre(String nombre) {
		return videoRepository.findByNombreContaining(nombre);
	}
	
	public List<VideoModels> filtrarCategoria(String categoria) {
		return videoRepository.findByCategoriaContaining(categoria);
	}

}
