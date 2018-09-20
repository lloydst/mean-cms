import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

    constructor(private http: HttpClient) { }
    get() {
        return this.http.get('/api/footer')
    }
    create(footer) {
        return this.http.post('/api/footer', footer)
    }
}
