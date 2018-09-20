import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../_services/header.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
headData
    getBackgroundImg() {
        // replace the path to your image here
        const img = this.headData[0].img
        const style = `background-image: url(${img});`;
        console.log(style)
        // this is to bypass this warning 'WARNING: sanitizing unsafe style value background-image: url(assets/img/wall.png) (see http://g.co/ng/security#xss)'
        return style;
    }
  constructor(
      private head: HeaderService,
      private sanitizer: DomSanitizer) { }

  ngOnInit() {
      this.head.get().subscribe(D=>{
          this.headData = D
      })
      //this.getBackgroundImg()
  }
/**
 * var HeaderSchema = new Schema({
    title: String,  // h1
    img: String,    // imgurl
    style: String   // classes
});
 */
}
