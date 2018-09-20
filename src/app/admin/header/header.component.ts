import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from '../../_services/header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    form = new FormGroup({
        title: new FormControl(''),
        img: new FormControl(''),
        style: new FormControl('')
    });

    constructor(private head: HeaderService) { }

    ngOnInit() {
    }
    save(form) {
        this.head.create(form).subscribe(()=>{

        })
    }
    /**
     * var HeaderSchema = new Schema({
        title: String,  // h1
        img: String,    // imgurl
        style: String   // classes
    });
     */
}
