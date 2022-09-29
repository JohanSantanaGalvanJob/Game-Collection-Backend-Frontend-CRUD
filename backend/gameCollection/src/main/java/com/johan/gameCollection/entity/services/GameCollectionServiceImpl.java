package com.johan.gameCollection.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.johan.gameCollection.entity.dao.IGameCollectionDao;
import com.johan.gameCollection.entity.models.GameCollection;

@Service
public class GameCollectionServiceImpl implements IGameCollectionService {

	
	@Autowired
	private IGameCollectionDao gameCollectionDao;
	
	@Override
	public GameCollection getOne(long id) {
		return gameCollectionDao.findById(id).get();
	}

	@Override
	public List<GameCollection> getAll() {
		return (List<GameCollection>) gameCollectionDao.findAll();
	}

	@Override
	public void post(GameCollection gameCollection) {
		gameCollectionDao.save(gameCollection);
	}

	@Override
	public void put(GameCollection gameCollection, long id) {
		gameCollectionDao.findById(id).ifPresent((x)->{
			gameCollection.setId(id);
			gameCollectionDao.save(gameCollection);
		});
		
	}

	@Override
	public void delete(long id) {
		gameCollectionDao.deleteById(id);
		
	}

}
