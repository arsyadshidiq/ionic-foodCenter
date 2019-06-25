import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.page.html',
  styleUrls: ['./sharing.page.scss'],
})
export class SharingPage {
 
  text = 'Check out the Ionic Academy!';
  url = 'https://ionicacademy.com';
 
  constructor(private socialSharing: SocialSharing, private file: File) { }
 
  async shareTwitter() {
    // Either URL or Image
    this.socialSharing.shareViaTwitter(null, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
 
  async shareWhatsApp() {   
    // Text + Image or URL works
    this.socialSharing.shareViaWhatsApp(this.text, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
 
  async resolveLocalFile() {
    return this.file.copyFile(`${this.file.applicationDirectory}/assets/`, 'kor.jpg', this.file.cacheDirectory, `${new Date().getTime()}.jpg`);
  }
 
  removeTempFile(name) {
    this.file.removeFile(this.file.cacheDirectory, name);
  }
 
  async shareEmail() {
    let file = await this.resolveLocalFile();
 
    this.socialSharing.shareViaEmail(this.text, 'My custom subject', ['arsyadshidiq1.com'], null, null, file.nativeURL).then(() => {
      this.removeTempFile(file.name);
    }).catch((e) => {
      // Error!
    });
  }
 
  async shareFacebook() {
    let file = await this.resolveLocalFile();
 
    // Image or URL works
    this.socialSharing.shareViaFacebook(null, file.nativeURL, null).then(() => {
      this.removeTempFile(file.name);
    }).catch((e) => {
      // Error!
    });
  }
}
