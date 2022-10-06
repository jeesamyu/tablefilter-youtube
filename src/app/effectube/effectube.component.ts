import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-effectube',
  templateUrl: './effectube.component.html',
  styleUrls: ['./effectube.component.css']
})
export class EffectubeComponent implements OnInit {

  @Input()
  url: string = "https://www.youtube.com/embed/Ata9cSC2WpM";
  urlSafe: SafeResourceUrl | undefined;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
