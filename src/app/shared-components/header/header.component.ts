import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  navbarsw3: boolean = false;
  properties = [
    { name: 'PORTFOLIOS', path: '/work', title: 'What is my Works', class: 'fa fa-newspaper-o' },
    { name: 'RESEARCH', path: '/research', title: 'All relevant Research of work', class: 'fa fa-wpexplorer' },
    { name: 'RESUME', path: '/resume', title: 'My Resume to hire', class: 'fa fa-bar-chart' },
    { name: 'LINKS', path: '/links', title: 'All relevant Links of projects', class: 'fa fa-anchor' }
  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navbarsMenuShow() {
    this.navbarsw3 = !this.navbarsw3;
  }

  pageShow(link: any) {
    console.log(link);
    this.navbarsw3 = false;
    this.router.navigate([link]);
  }

}
