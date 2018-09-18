import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PageService } from '../_services/page.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    options = [{ 'id': 'paragraph', 'name': 'paragraph' }, { 'id': 'paragraphTextLeft', 'name': 'paragraph with image left' }, { 'id': 'paragraphTextRight', 'name': 'paragraph with image right' }];
    pageCreateForm = this.fb.group({
        title: ['', Validators.required],
        article: this.fb.array([
            this.addArticle()
        ])

    });

    constructor(
        private fb: FormBuilder,
        private page: PageService) { }
    get article() {
        return this.pageCreateForm.get('article') as FormArray;
    }
    addArticle() {
        return this.fb.group({
            src: [''],
            text: [''],
            type: ['']
        });
    }
    get f() {
        return this.pageCreateForm.controls;
    }
  ngOnInit() {
  }


    getPath() {
        // initialize our address
        return this.fb.group({
            src: [''],
            text: [''],
            type:['']
        });
    }

    /**
     * just a function
     */
    addPath() {
        // add address to the list
        const control = <FormArray>this.pageCreateForm.controls['article'];
        control.push(this.getPath());

    }
    /**
     * path to remove
     * @param i index
     */
    removeArticle(i: number) {
        // remove address from the list
        const control = <FormArray>this.pageCreateForm.controls['article'];
        control.removeAt(i);
    }
    save(form) {
        this.page.newOrUpdate(form).subscribe(()=>{
            return 'succes'
        })
    }
}

//


