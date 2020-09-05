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
  constructor(private w3service: W3esearviceMainService) { }

  ngOnInit() {
    localStorage.setItem("localVal", "first_time");
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
