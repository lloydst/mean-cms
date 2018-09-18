import { Component, OnInit } from '@angular/core';
import { PageService } from '../../_services/page.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    pages;
  constructor(private page: PageService) { }

  ngOnInit() {
      this.getAllPages()
  }
  getAllPages() {
    this.page.allPages().subscribe(pagesObj =>{
        this.pages = pagesObj;
       
    })
  }
}
