package com.johan.gameCollection.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.johan.gameCollection.entity.models.GameCollection;


public interface IGameCollectionDao extends CrudRepository<GameCollection,Long> {


}
