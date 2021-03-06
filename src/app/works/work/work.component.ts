import { Component, OnInit } from '@angular/core';
import { DATA } from '../../constant/constant';
import { W3esearviceMainService } from '../../services/w3esearvice-main.service';
import { Wwwmodel, Works, Project } from './../../models/wwwmodel.model';
import { Observable } from 'rxjs';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


import { map } from 'rxjs/operators';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class WorkComponent implements OnInit {
  loader: boolean;
  allWorksListsImage = DATA.path.worksimagepath;
  projectdetailsimagepath = DATA.path.projectdetailsimagepath;
  allTitle = DATA.pagelabel.portfolio;
  totalAllProjects;
  getAllWorksTopMnc$: Observable<Project[]>;
  getAllWorksRegMnc$: Observable<Project[]>;
  constructor(private w3service: W3esearviceMainService, config: NgbCarouselConfig) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit() {    
    this.reloadWorks();
    
  }

  reloadWorks() {
    this.w3service.getAllProjects().pipe(
      map(element => element.filter(user => user.mncproj))
    ).subscribe(val => {
     this.getAllWorksTopMnc$ = val;
     this.loader = false;
    })
    this.w3service.getAllProjects().pipe(
      map(element => element.filter(user => !user.mncproj))
    ).subscribe(val => {
     this.getAllWorksRegMnc$ = val;
     this.loader = false;
    })
  }

}
