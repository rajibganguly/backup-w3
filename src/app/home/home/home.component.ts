import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { W3esearviceMainService } from './../../services/w3esearvice-main.service';

import { SortingLatestPipe } from './../../sortinglatest.pipe';

import { DATA } from './../../constant/constant';
import { map } from 'rxjs/operators';
import { Wwwmodel, Works, sortByLateste } from '../../models/wwwmodel.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  allWorksLists = [];
  allWorksListsImage = DATA.path.worksimagepath;
  loader: boolean;
  private rm: Subscription;

  mainCoreAreas = [
    {
      title: "Developed on Github",
      icon: "fa fa-git",
      description: "Our 100% development is on GitHub. So anyone can join and see the updated from client side developments."
    },
    {
      title: "Chrome Support",
      icon: "fa fa-chrome",
      description: "Our Application majorly support chrome browser or I can say our development and debugging in Chrome."
    },
    {
      title: "Available on Immediate Basis",
      icon: "fa fa-whatsapp",
      description: "Get in touch is easy when working with me. Whatsapp, zoom or skype and many other which is convenient."
    },
    {
      title: "Android Apps/ Website UX UI",
      icon: "fa fa-android",
      description: "Using Ionic frameworks, I help to create android, which is simple, easy and fast deliverables."
    },
    {
      title: "Graphic design and More",
      icon: "fa fa-spinner",
      description: "Best graphics and design solution which increase user experience."
    },
    {
      title: "Brand Identity",
      icon: "fa fa-id-card-o",
      description: "Also working in print media brochure/ banner and any article for brand recognition."
    }
  ]
  constructor(private w3service: W3esearviceMainService) { }

  ngOnInit() {
    // localStorage.setItem("localVal", "first_time");
    this.loadAllWorks();
  }

  loadAllWorks() {
    this.w3service.getAllWorks();
    this.rm = this.w3service.projectsw3earth$.subscribe((res: Works[]) => {
      this.allWorksLists = res;
    })    
    this.loader = false;
    
  }

}
