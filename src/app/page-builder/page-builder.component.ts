import { Component, OnInit } from '@angular/core';
import { PageService } from '../_services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-builder',
  templateUrl: './page-builder.component.html',
  styleUrls: ['./page-builder.component.scss']
})
export class PageBuilderComponent implements OnInit {

    url
    page; // htmlbinding
    constructor(
        private _page: PageService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getCurrentPage()
    }
    getCurrentPage() {
        var regex = /[/]/g;
        this.url = this.router.url // gives /home
        this._page.singlePage(this.url.replace(regex, '')).subscribe(pageObj => {
            this.page = pageObj
        })
    }
}
