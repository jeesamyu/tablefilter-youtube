import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

 
  @Input()

  url:string="https://www.youtube.com/embed/Ata9cSC2WpM?autoplay=1";
  url1:string="https://www.youtube.com/embed/3dHNOWTI7H8?autoplay=1";
  url2:string="https://www.youtube.com/embed/l23KYiM5Se0?autoplay=1";
  url3:string="https://www.youtube.com/embed/y14f_VFsZIA?autoplay=1";
  url4:string="https://www.youtube.com/embed/i8xsbYgMiBs?autoplay=1";
  url5:string="https://www.youtube.com/embed/hQAHSlTtcmY?autoplay=1";
  url6:string="https://www.youtube.com/embed/NIq3qLaHCIs?autoplay=1";
  url7:string="https://www.youtube.com/embed/DHvZLI7Db8E?autoplay=1";
  url8:string="https://www.youtube.com/embed/h33Srr5J9nY?autoplay=1";
  urlSafe!: SafeResourceUrl;

  title="";
  heading="video 1";
  heading1="video 2";
  heading2="video 3";
  heading3="video 4";
  heading4="video 5";
  heading5="video 6";
  heading6="video 7";
  heading7="video 8";
  heading8="video 9";

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit():void{

}

    playvideo(){
  this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  this.title=this.heading;
}

    playvideo1(){
 this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
 this.title=this.heading1;
}

    playvideo2(){
      this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
      this.title=this.heading2;
}

    playvideo3(){
      this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url3);
      this.title=this.heading3;
}
    playvideo4(){
      this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url4);
      this.title=this.heading4;
}
    playvideo5(){
      this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url5);
      this.title=this.heading5;
}
    playvideo6(){
      this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url6);
      this.title=this.heading6;
}
    playvideo7(){
      this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url7);
      this.title=this.heading7;
}
    playvideo8(){
      this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url8);
      this.title=this.heading8;
}

}

