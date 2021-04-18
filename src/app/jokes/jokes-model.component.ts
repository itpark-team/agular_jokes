import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface Joke {
  id: number;
  text: string;
  rating: number;
}


@Component({
  templateUrl: './jokes-model.component.html'
})

export class JokesModelComponent {

  constructor(public dialogRef: MatDialogRef<JokesModelComponent>, @Inject(MAT_DIALOG_DATA) public data: Joke) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addModel(): void {

    /*const body = JSON.stringify(this.tempJoke);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);

    this.http.post<Joke>('https://localhost:44315/api/jokes', body, {headers: myHeaders}).subscribe(
      data => { // this.jokesList.push(data)
      });*/
  }



}

