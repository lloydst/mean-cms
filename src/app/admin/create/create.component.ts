import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder } from '@angular/forms';
import { PageService } from '../../_services/page.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {

    /**
       * boolean for a show updated message
       */
    saved = false;
    /**
     * sets the options for predefined templates
     */
    options = [{ 'id': 'paragraph', 'name': 'paragraph' }, { 'id': 'paragraphTextLeft', 'name': 'paragraph with image left' }, { 'id': 'paragraphTextRight', 'name': 'paragraph with image right' }];
    pageCreateForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(4)]],
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
            src: [''], // should check if it is in a valid url format
            text: [''], // doesn't really need validation
            type: ['', [Validators.required]]  // MUST USE A PREDEFINED TEMPLATE
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
            type: ['']
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
    /**
     * saves the form and shows a updated message for 2 seconds
     * @param form form value
     */
    save(form) {
        this.page.newOrUpdate(form).subscribe(() => {
            setTimeout(() => {
                this.saved = false
            }, 2000);
            this.saved = true
        })
    }

}
