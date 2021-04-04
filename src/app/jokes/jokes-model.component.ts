import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {JokesComponent} from './jokes.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {stringify} from 'querystring';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';

interface Joke {
  id: number;
  text: string;
  rating: number;
}


@Component({
  templateUrl: './jokes-model.component.html'
})

export class JokesModelComponent {

  token: string;

  jokeInputsGroup = new FormGroup({
    textInput: new FormControl(''),
    rating: new FormControl(0)
  });

  constructor(public activeModal: NgbActiveModal, private router: Router, private http: HttpClient, private dataService: DataService) {
    this.token = dataService.getData('AccessToken');
  }

  addModel(): void {
    alert(this.jokeInputsGroup.value);
    console.log(this.jokeInputsGroup.value);
    /*const body = JSON.stringify(this.tempJoke);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);

    this.http.post<Joke>('https://localhost:44315/api/jokes', body, {headers: myHeaders}).subscribe(
      data => { // this.jokesList.push(data)
      });*/
  }

}

