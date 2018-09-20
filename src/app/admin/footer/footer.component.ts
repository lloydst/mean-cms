import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/**
 * var FooterSchema = new Schema({
    columns: {
        type: Array,
        content: {//this one isn't actually used as a query its just so it repeats a object within the columns array
            icon: String,
            url: String,
            name: String
        }
    }

});
 */
}
