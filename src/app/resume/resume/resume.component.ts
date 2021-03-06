import { Component, OnInit, OnChanges, AfterViewChecked, DoCheck, ViewEncapsulation } from '@angular/core';
import { W3esearviceMainService } from '../../services/w3esearvice-main.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { DATA } from './../../constant/constant';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ResumeComponent implements OnInit {
  mapimages = [];  
  allWorksListsImage = DATA.path.worksimagepath;
  allSkillsDisplay;
  resumepath = DATA.path.resumepath;
  pagetitle = DATA.global.pagetitle[0];
  description = DATA.pagelabel.resume.description;
  BUTTON1 = DATA.buttons.button1;

  tableHead = {
    theadone: DATA.pagelabel.resume.theadone,
    theadtwo: DATA.pagelabel.resume.theadtwo,
    theadthree: DATA.pagelabel.resume.theadthree,
    theadfour: DATA.pagelabel.resume.theadfour,
    theadfive: DATA.pagelabel.resume.theadfive
  }

  constructor(private w3service: W3esearviceMainService, config: NgbCarouselConfig) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit() {
    this.w3service.getAllSkills().subscribe((d) => {
      this.allSkillsDisplay = d['skills'];      
    });
    this.w3service.getAllExperience().subscribe((d) => {
      this.mapimages = d['experience'];
    })

    
    
  }

  priorityByLabel() {
    if (this.allSkillsDisplay != undefined) {
      this.allSkillsDisplay = this.allSkillsDisplay.sort((a, b) => {
        return a.projects - b.projects
      });
    }
    
  }

  

}
