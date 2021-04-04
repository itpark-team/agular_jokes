import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {stringify} from 'querystring';
import {JokesModelComponent} from './jokes-model.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

interface Joke {
  id: number;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  jokesList: Joke[] = [];
  tempJoke: Joke = {id: 0, rating: 0, text: ''};
  token: string;

  constructor(private http: HttpClient, private dataService: DataService, private modalService: NgbModal) {
    this.token = dataService.getData('AccessToken');
  }

  openJokes(): void {
    const modalRef = this.modalService.open(JokesModelComponent);
    modalRef.componentInstance.text = 'Some text';
  }

  ngOnInit(): void {
  }

  loadJokes(): void {

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    this.http.get<Joke[]>('https://localhost:44315/api/jokes', {headers: headers}).subscribe(
      data => this.jokesList = data
    );

  }

  deleteJoke(id: number): void {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    this.http.delete<number>('https://localhost:44315/api/jokes/' + id, {headers: headers}).subscribe(
      data => {
        const findIndex = this.jokesList.findIndex(item => item.id === data);
        this.jokesList.splice(findIndex, 1);
      }
    );
  }

  addJoke(): void {
    const body = JSON.stringify(this.tempJoke);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);

    this.http.post<Joke>('https://localhost:44315/api/jokes', body, {headers: myHeaders}).subscribe(
      data => this.jokesList.push(data)
    );

  }

  updateJoke(): void {
    const body = JSON.stringify(this.tempJoke);
    const id = this.tempJoke.id;

    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);


    this.http.put<Joke>('https://localhost:44315/api/jokes/' + id, body, {headers: myHeaders}).subscribe(
      data => {
        const findIndex = this.jokesList.findIndex(item => item.id === id);
        this.jokesList.splice(findIndex, 1, data);
      }
    );

  }
}
