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
    headData
    form = new FormGroup({
        title: new FormControl(''),
        img: new FormControl(''),
        style: new FormControl(''),
        id: new FormControl('')
    });

    constructor(private head: HeaderService) { }

    ngOnInit() { // the id isnt a -html- field so the user cant accedently create new ones
        this.head.get().subscribe(D => {
            this.headData = D
            this.form.setValue({ title: this.headData[0].title, img: this.headData[0].img, style: this.headData[0].style, id: this.headData[0]._id })
        })
    }
    save(form) {
        this.head.create(form).subscribe(() => {
        })
    }

}
