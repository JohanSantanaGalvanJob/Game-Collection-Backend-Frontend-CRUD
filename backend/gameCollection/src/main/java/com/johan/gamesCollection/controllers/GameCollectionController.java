package com.johan.gamesCollection.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.johan.gameCollection.entity.models.GameCollection;
import com.johan.gameCollection.entity.services.IGameCollectionService;

@RestController
@CrossOrigin(origins = "*")
public class GameCollectionController {
	@Autowired
	IGameCollectionService gameCollectionService;

	@GetMapping("/gameCollection")
	public List<GameCollection> getAllGameCollection() {
		return gameCollectionService.getAll();
	}

	@GetMapping("/gameCollection/{id}")
	public GameCollection getOne(@PathVariable(value = "id") long id) {
		return gameCollectionService.getOne(id);
	}

	@PostMapping("/gameCollection")
	public void post( GameCollection gameCollection) {
		gameCollectionService.post(gameCollection);
	}

	@PutMapping("/gameCollection/{id}")
	public void put(  GameCollection gameCollection, @PathVariable(value = "id") long id) {
		gameCollectionService.put(gameCollection, id);
	}

	@DeleteMapping("/gameCollection/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		gameCollectionService.delete(id);
	}

}
