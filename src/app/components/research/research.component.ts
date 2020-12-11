import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NasaSateComponent } from './../nasa-sate/nasa-sate.component';
import { W3esearviceMainService } from 'src/app/services/w3esearvice-main.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  @ViewChild('selectRashi', {static: true}) selectRashi: ElementRef;
  zodac: any[] = ['Mar 19 - Apr 20', 'Apr 19 - May 20', 'May 19 - Jun 20', 'Jun 19 - Jul 20', 'Jul 19 - Aug 20', 'Aug 19 - Sep 20', 'Sep 19 - Oct 20', 'Oct 19 - Nov 20', 'Nov 19 - Dec 20',  'Dec 19 - Jan 20', 'Jan 19 - Feb 20', 'Feb 19 - Mar 20'];
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
