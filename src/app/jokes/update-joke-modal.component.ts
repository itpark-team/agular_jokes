import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

interface Joke {
  id: number;
  text: string;
  rating: number;
}

@Component({
  templateUrl: './update-joke-modal.component.html'
})

export class UpdateJokeModalComponent {

  constructor(public dialogRef: MatDialogRef<UpdateJokeModalComponent>, @Inject(MAT_DIALOG_DATA) public joke: Joke) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

