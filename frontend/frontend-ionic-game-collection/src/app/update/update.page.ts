import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GameCrudService } from './../services/game-crud.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateGameFg: FormGroup;
  id: any;

  constructor(
    private gameCrudService: GameCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchGame(this.id);
    this.updateGameFg = this.formBuilder.group({
      platform: [''],
      title: [''],
      description: [''],
      genre:[''],
      thumbnailUrl:[''],
      metaScore:[''],
      userScore:[''],
      releaseDate:['']
    })
  }

  fetchGame(id) {
    this.gameCrudService.getGame(id).subscribe((data) => {
      this.updateGameFg.setValue({
        platform: data['platform'],
        title: data['title'],
        description: data['description'],
        genre: data['genre'],
        thumbnailUrl: data['thumbnailUrl'],
        userScore: data['userScore'],
        metaScore: data['metaScore'],
        releaseDate: data['releaseDate']
      });
    });
  }

  onSubmit() {
    if (!this.updateGameFg.valid) {
      return false;
    } else {
      this.gameCrudService.updateGame(this.id, this.updateGameFg.value)
        .subscribe(() => {
          this.updateGameFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }

}
