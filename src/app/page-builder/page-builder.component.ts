import { Component, OnInit } from '@angular/core';
import { PageService } from '../_services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-builder',
  templateUrl: './page-builder.component.html',
})
export class PageBuilderComponent implements OnInit {

    url: String;
    page: any=[]; // htmlbinding array is so it doesnt complain about .length
    constructor(
        private _page: PageService,
        private router: Router
    ) { }

    ngOnInit() {
        /**
         * reusestrategy is required to reroute on each topnav click (else the param would change but not rerendered)
         */
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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
