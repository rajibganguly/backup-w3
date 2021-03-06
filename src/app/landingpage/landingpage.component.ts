import { Component, ViewChild, ElementRef, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DATA } from './../constant/constant';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  siteUrl = DATA.global.siteurl;
  name = DATA.global.name;
  logo = DATA.global.logo;
  logoPath = DATA.path.logopath;
  firstTimeLanding = true;
  // nextTiGo = true;
//   @ViewChild('canvas', { static: true }) 
//   canvas: ElementRef<HTMLCanvasElement>;
//   private ctx: CanvasRenderingContext2D;

projects = [
  {imgpath: './../../../../assets/images/details/xs/xs1.jpg', title: 'Elearning Project'},
  {imgpath: './../../../../assets/images/details/xs/xs2.jpg', title: 'Banking Finance Project'},
  {imgpath: './../../../../assets/images/details/xs/xs3.jpg', title: 'Telecom Project'},
  {imgpath: './../../../../assets/images/details/xs/xs4.jpg', title: 'Education Project'},
  {imgpath: './../../../../assets/images/details/xs/xs5.jpg', title: 'Android Ionic Project'},
  {imgpath: './../../../../assets/images/details/xs/xs6.jpg', title: 'Automation Mechanical Project'},
  {imgpath: './../../../../assets/images/details/xs/xs7.jpg', title: 'Design Project'}
]
  

  
  
  

  

  constructor(private http: HttpClient, public router: Router) { 
  }


  ngOnInit() {
  const localvalue = localStorage.getItem("localVal");
    console.log(localvalue);
    // if(localvalue === "first_time") {
    //   this.enterApp();
    // } else {
    //   this.firstTimeLanding = true;
      
    // }
    
  }

  


  public enterApp(): void {
    this.firstTimeLanding = false;
    this.router.navigate(['/home']);
  }


  public goToResume(): void {
    this.firstTimeLanding = false;
    this.router.navigate(['/resume']);
  }


  public goToWork(): void {
    this.firstTimeLanding = false;
    this.router.navigate(['/work']);
  }

}








