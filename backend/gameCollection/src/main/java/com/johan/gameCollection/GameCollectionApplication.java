package com.johan.gameCollection;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages= {"com.johan.gamesCollection.controllers","com.johan.gamesCollection.exceptions","com.johan.gameCollection.entity.dao","com.johan.gameCollection.entity.models","com.johan.gameCollection.entity.services"})
public class GameCollectionApplication {

	public static void main(String[] args) {
		SpringApplication.run(GameCollectionApplication.class, args);
	}

}
