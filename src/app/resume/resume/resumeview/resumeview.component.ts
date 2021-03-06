import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DATA } from './../../../constant/constant';

@Component({
  selector: 'app-resumeview',
  templateUrl: './resumeview.component.html',
  styleUrls: ['./resumeview.component.scss']
})
export class ResumeviewComponent implements OnInit {
  resumepath = './../../assets/cv/rg-resume.pdf';
  sanitizer;

  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;   
   }

  ngOnInit() {
  }

  resumeURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.resumepath);
  }

}




