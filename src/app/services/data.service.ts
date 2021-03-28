import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DataService {

  saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getData(key: string): string {
    return localStorage.getItem(key);
  }
}
