import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  constructor(private http: HttpClient) {}

  getJsonData() {
    return this.http.get<any>('../../services/data.json');
  }
}
