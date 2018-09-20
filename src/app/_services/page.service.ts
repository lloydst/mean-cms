import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  singlePage(pageid: String) {
    return this.http.get('/api/page/'+pageid)
  }
  allPages() {
    return this.http.get('/api/page')
  }
  update(_id: String, page) {
    return this.http.put('/api/page', page)
  }
  create(page) {
      return this.http.post('api/page', page)
  }
}
