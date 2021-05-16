import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

interface Joke {
  id: number;
  text: string;
  rating: number;
}

@Component({
  templateUrl: './add-joke-modal.component.html'
})

export class AddJokeModalComponent {

  constructor(public dialogRef: MatDialogRef<AddJokeModalComponent>, @Inject(MAT_DIALOG_DATA) public joke: Joke) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

