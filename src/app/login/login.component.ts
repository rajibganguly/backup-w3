import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errormsg: boolean = false;
  txtFld: string;

  constructor() { }

  ngOnInit() {
    
  }

  onEnterCode() {
    this.errormsg = true;
    return false;
  }

}
