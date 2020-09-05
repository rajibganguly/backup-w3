import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { W3esearviceMainService } from 'src/app/services/w3esearvice-main.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  @ViewChild('selectRashi', {static: true}) selectRashi: ElementRef;
  zodac: any[] = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius',  'Capricorn', 'Aquarius', 'Pisces'];
  dataDetails;
  homeReturn = true;
  loader = false;

  constructor(
    private http: HttpClient,
    private service: W3esearviceMainService
    ) { }

  ngOnInit() {
  }

  changeSelect() {
    this.homeReturn = false;
    this.loader = true;
    const a = this.selectRashi.nativeElement.value;    
    this.service.astroService(a).subscribe(
      (data) => {
        this.dataDetails = data;
        this.loader = false;
      }, (err) => {
        console.log(err)
      }
    )
  }

  

  
  

}
