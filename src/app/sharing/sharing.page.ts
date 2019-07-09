import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.page.html',
  styleUrls: ['./sharing.page.scss'],
})
export class SharingPage {
 
  text:string = null;
  url:string = null;
  img:string = null;
  file:string = null;
  
  constructor(private socialSharing: SocialSharing) { }
 
  share() {
    // Either URL or Image
    this.socialSharing.share(this.text, this.url, this.img, this.file).then(() => {
      // Success
    }).catch(( ) => {
      // Error!
    });
 
   }
}
