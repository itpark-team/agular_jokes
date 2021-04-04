import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {JokesComponent} from './jokes.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {stringify} from 'querystring';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

interface Joke {
  id: number;
  text: string;
  rating: number;
}


@Component({
  templateUrl: './jokes-model.html'
})

export class JokesModel {
  @Input() text: string;
  @Input() rating: number;
  @Input() token: string;
  @Input() jokesList: Joke[] = [];
  @Input() tempJoke: Joke;


  constructor(public activeModal: NgbActiveModal, private router: Router, private http: HttpClient) {
  }

  addModel(): void {
    const body = JSON.stringify(this.tempJoke);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);


    this.http.post<Joke>('https://localhost:44315/api/jokes', body, {headers: myHeaders}).subscribe(
      data => this.jokesList.push(data));
  }

  closeModal(): void {
    this.router.navigateByUrl('/jokes');
  }

}

