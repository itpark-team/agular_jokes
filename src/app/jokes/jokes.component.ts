import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {JokesModelComponent} from './jokes-model.component';
import {MatDialog} from '@angular/material/dialog';

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

  constructor(private http: HttpClient, private dataService: DataService, public dialog: MatDialog) {
    this.token = dataService.getData('AccessToken');
  }

  openJokes(): void {
    const dialogRef = this.dialog.open(JokesModelComponent, {
      data: {id: 0, text: '', rating: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(result['text']+" "+result['rating']);
    });
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
