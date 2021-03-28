import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataService} from '../services/data.service';


import {HomeModalComponent} from './home-model.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: string = '';
  password: string = '';

  constructor(private http: HttpClient, private dataService: DataService, private modalWindow: NgbModal) {
  }

  ngOnInit(): void {
  }

  authorizeUser(): void {
    const body = JSON.stringify({login: this.login, password: this.password, name: '', id: 0});

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post('https://localhost:44315/api/users', body, {headers: headers}).subscribe(
      data => {
        this.dataService.saveData('AccessToken', data['access_token'].toString());
        this.dataService.saveData('Username', data['username'].toString());

        const modalRef = this.modalWindow.open(HomeModalComponent);
        modalRef.componentInstance.description = 'Здравствуйте, ' + data['username'].toString();
        modalRef.componentInstance.title = 'Авторизация прошла успешно';

        modalRef.componentInstance.isAuth = true;
      },
      error => {
        const modalRef = this.modalWindow.open(HomeModalComponent);
        modalRef.componentInstance.description = 'Неверный логин или пароль';
        modalRef.componentInstance.title = 'Ошибка авторизации';
        modalRef.componentInstance.isAuth = false;
      }
    );
  }
}
