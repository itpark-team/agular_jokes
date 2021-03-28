import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public abouts: string[] = [];
  tempAbout = '';
  tempIndexAbout = 0;

  constructor() {
    this.abouts.push('This', 'is', 'my Site');
  }

  ngOnInit(): void {
  }

  addInformationAboutUs(): void {
    if (this.tempAbout === '') {
      alert('Ошибка');
      return;
    }
    this.abouts.push(this.tempAbout);
    this.tempAbout = '';
  }

  deleteInformationAboutUs(): void {
    this.abouts.splice(this.tempIndexAbout, 1);
  }

  updateInformationAboutUs(): void {
    this.abouts[this.tempIndexAbout] = this.tempAbout;
  }
}
