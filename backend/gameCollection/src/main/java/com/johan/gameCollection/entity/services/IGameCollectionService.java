package com.johan.gameCollection.entity.services;

import java.util.List;

import com.johan.gameCollection.entity.models.GameCollection;

public interface IGameCollectionService {
	public GameCollection getOne(long id);
	public List<GameCollection> getAll();
	public void post(GameCollection gameCollection);
	public void put(GameCollection gameCollection,long id);
	public void delete(long id);
}
