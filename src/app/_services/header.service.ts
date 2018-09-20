import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }
  get() {
      return this.http.get('/api/header');
  }
  create(header) {
      return this.http.post('/api/header',header);
  }
}
