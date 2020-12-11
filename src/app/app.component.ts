import { Component, ViewChild, ElementRef, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DATA } from './constant/constant';
import { HttpClient } from '@angular/common/http';
import { GameComponent } from './components/game/game.component';
import { Router } from '@angular/router';

import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  siteUrl = DATA.global.siteurl;
  name = DATA.global.name;
  logo = DATA.global.logo;
  logoPath = DATA.path.logopath;
  firstTimeLanding = true;
  // nextTiGo = true;
//   @ViewChild('canvas', { static: true }) 
//   canvas: ElementRef<HTMLCanvasElement>;
//   private ctx: CanvasRenderingContext2D;
  

  
  
  

  

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

  


  enterApp() {
    this.firstTimeLanding = false;
    this.router.navigate(['/home']);
  }



  
  
  

}


