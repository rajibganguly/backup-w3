import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { W3esearviceMainService } from 'src/app/services/w3esearvice-main.service';

@Component({
  selector: 'app-nasa-sate',
  templateUrl: './nasa-sate.component.html',
  styleUrls: ['./nasa-sate.component.scss']
})


export class NasaSateComponent implements OnInit, OnChanges {
  startDate;
  endDate;
  allResponse = [];
  detailsData;
  public widthObj: string;
  public heightObj: string;

  @ViewChild ('datedd', {static: false}) datedd: ElementRef;
  @ViewChild ('months', {static: false}) months: ElementRef;
  @ViewChild ('year', {static: false}) year: ElementRef;

  constructor(private service: W3esearviceMainService) { }

  ngOnInit() {   
  }

  showDetails() {
    this.endDate = `${this.year.nativeElement.value}-${this.months.nativeElement.value}-${this.datedd.nativeElement.value}`;
    this.startDate = `${this.year.nativeElement.value}-${this.months.nativeElement.value}-${Number(this.datedd.nativeElement.value) + 7}`;
    console.log(this.startDate, this.endDate);
    this.service.getNasaNearEarthObject(this.startDate, this.endDate).subscribe(
      (res) => {        
        for (const key in res) {
          this.allResponse.push(key);
        }
        this.astroidSize(null);
        this.detailsData = res;
        console.log(this.allResponse);
        console.log(this.detailsData);

      }
    )
  }

  astroidSize(as) {
    return `style=width: ${as}em;`;    
    console.log(as+'px');
  }


  ngOnChanges() {
    this.astroidSize(null);
  
  }
}
