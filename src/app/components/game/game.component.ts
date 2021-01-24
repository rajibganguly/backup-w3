import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { W3esearviceMainService } from 'src/app/services/w3esearvice-main.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent implements OnInit {
  txtTitle: string;
  txtPara: string;
  nasaPrObj: any;
  bgSprites = [
    { day: '0', image: './../../../assets/images/typing-849806_1920.jpg'},
    { day: '1', image: './../../../assets/images/typing-859806_1920.jpg'},
    { day: '2', image: './../../../assets/images/typing-869806_1920.jpg'},
    { day: '3', image: './../../../assets/images/typing-879806_1920.jpg'},
    { day: '4', image: './../../../assets/images/typing-889806_1920.jpg'},
    { day: '5', image: './../../../assets/images/typing-899806_1920.jpg'},
    { day: '6', image: './../../../assets/images/typing-909806_1920.jpg'}
  ];
  projects = [
    {imgpath: './../../../../assets/images/details/xs/xs1.jpg', title: 'Elearning Project'},
    {imgpath: './../../../../assets/images/details/xs/xs2.jpg', title: 'Banking Finance Project'},
    {imgpath: './../../../../assets/images/details/xs/xs3.jpg', title: 'Telecom Project'},
    {imgpath: './../../../../assets/images/details/xs/xs4.jpg', title: 'Education Project'},
    {imgpath: './../../../../assets/images/details/xs/xs5.jpg', title: 'Android Ionic Project'},
    {imgpath: './../../../../assets/images/details/xs/xs6.jpg', title: 'Automation Mechanical Project'},
    {imgpath: './../../../../assets/images/details/xs/xs7.jpg', title: 'Design Project'}
  ]

  @ViewChild('catchCanvas', {static: true}) catchCanvas: ElementRef;

  constructor(private router: Router, private service: W3esearviceMainService) {}

ngOnInit() {
  this.service.getNasaPlanetaryApod().subscribe(
    (res) => {
      this.nasaPrObj = res;
      this.dayFixBackground();
    }
  )
  
}

enterInside() {
  this.router.navigate(['/home'])
}


dayFixBackground() {
  const date = new Date();
  const day = date.getDay();
  console.log(`toay is ${day} day, image is ${this.bgSprites[day].image}`);
  this.catchCanvas.nativeElement.style.backgroundImage = 'url(' + this.bgSprites[day].image + ')';
}

}

