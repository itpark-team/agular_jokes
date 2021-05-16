import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {AddJokeModalComponent} from './add-joke-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {UpdateJokeModalComponent} from './update-joke-modal.component';

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
  token: string;

  constructor(private http: HttpClient, private dataService: DataService, public dialog: MatDialog) {
    this.token = dataService.getData('AccessToken');
  }

  showDialogAddJokes(): void {
    let tempJoke: Joke = {id: 0, rating: 0, text: ''};

    const dialogRef = this.dialog.open(AddJokeModalComponent, {data: tempJoke});

    dialogRef.afterClosed().subscribe(result => {
      this.addJoke(result);
    });
  }

  showDialogUpdateJokes(joke: Joke): void {
    let tempJoke: Joke = {id: joke.id, rating: joke.rating, text: joke.text};

    const dialogRef = this.dialog.open(UpdateJokeModalComponent, {data: tempJoke});

    dialogRef.afterClosed().subscribe(result => {
      this.updateJoke(result);
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

  addJoke(joke: Joke): void {
    const body = JSON.stringify(joke);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);

    this.http.post<Joke>('https://localhost:44315/api/jokes', body, {headers: myHeaders}).subscribe(
      data => this.jokesList.push(data)
    );

  }

  updateJoke(joke: Joke): void {
    const body = JSON.stringify(joke);
    const id = joke.id;

    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);


    this.http.put<Joke>('https://localhost:44315/api/jokes/' + id, body, {headers: myHeaders}).subscribe(
      data => {
        const findIndex = this.jokesList.findIndex(item => item.id === id);
        this.jokesList.splice(findIndex, 1, data);
      }
    );
  }
}
