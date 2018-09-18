import { Component, OnInit } from '@angular/core';
import { PageService } from '../_services/page.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
})
export class TopnavComponent implements OnInit {
pages: any;
  constructor(private page: PageService) { }

  ngOnInit() {
      this.getpages()
  }
  getpages() {
      this.page.allPages().subscribe(pagesobj=>{
          this.pages = pagesobj
      })
  }
}
