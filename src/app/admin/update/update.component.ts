import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PageService } from '../../_services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
    notice;
    options = [{ 'id': 'paragraph', 'name': 'paragraph' },
    { 'id': 'paragraphTextLeft', 'name': 'paragraph with image left' },
    { 'id': 'paragraphTextRight', 'name': 'paragraph with image right' }];
    currentPage;
    pageName;
    pageData;
    preloadArticle;
    pageUpdateForm: FormGroup;
    article= new FormControl();

    constructor(
        private fb: FormBuilder,
        private page: PageService,
        private router: Router
        ) {
            this.updateForm()
         }
    updateForm() {
        this.pageUpdateForm = this.fb.group({
            title: this.fb.group({}),
            article: this.fb.array([])
        });
    }
    getCurrentPage() {
        const url = this.router.url.split('/');
        this.currentPage = url[3];
    }
    reloadData() {
        this.page.singlePage(this.currentPage).subscribe(res => {
            this.pageData = res;
            this.preloadArticle = res[0].article; // loads all 'paths'
            this.pageUpdateForm.controls['title'].setValue(res[0].title, { onlySelf: true });
            for (const a of this.preloadArticle) {
                this.preaddArticle(a);
            }
        });
    }
    /**
     * function
     * @param path if here it will load the path with data if not defined it will create a empty/new section
     */
    initSection(article) {
        if (!article) {
            const newarticle = {
                text: '',
                type: '',
                src: ''
            };
        }
        // console.log(path.pathurl)
        return new FormGroup({
            text: new FormControl(article.text, [/*validators here*/]),
            type: new FormControl(article.type, [/*validators here*/]),
            src: new FormControl(article.src, [/*validators here*/])
        });
    }
    ngOnInit() {
        this.getCurrentPage()
        this.pageUpdateForm = this.fb.group({
            title: [this.pageName],
            article: this.fb.array([

            ])
        })
        this.reloadData()
    }
    getArticle() {
        return this.fb.group({
            text: ['this is where your paragraphs come', [Validators.required]],
            type: ['default'],
            src: ['some img url here']
        });
    }
    reloadPage() {
        location.reload(true)
    }
    preaddArticle(article) {
        const control = <FormArray>this.pageUpdateForm.get('article');
        control.push(this.initSection(article))
    }
    initArticle() {
        return this.fb.group({
            text: [''],
            type: [''],
            src: ['']
            
        });
    }
    addParagraph(){
        const control = <FormArray>this.pageUpdateForm.controls['article'];
        control.push(this.initArticle());
    }
    removeParagraph(i: number) {
        const control = <FormArray>this.pageUpdateForm.controls['article'];
        control.removeAt(i)
    }
    update(id, form) {
        this.page.update(id, form).subscribe(message => {
                this.notice = message

            }, err => {
                console.log(err)
            })
            // then either navigate to the top or do something else
    }
    get f() {
        return this.pageUpdateForm.controls;
    }
}
