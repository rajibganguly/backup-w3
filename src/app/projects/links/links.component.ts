import { Component, OnInit } from '@angular/core';
import { W3esearviceMainService } from 'src/app/services/w3esearvice-main.service';
import { DATA } from '../../constant/constant';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  maintitle = DATA.pagelabel.link.maintitle;
  subtitle = DATA.pagelabel.link.subtitle;
  projectdetailsimagepath = DATA.path.projectdetailsimagepath;
  companyImages = [];
  certificateImages = [];

  constructor(private service: W3esearviceMainService) { }

  ngOnInit() {
    this.service.getAllLinks().subscribe((ele) => {
      this.companyImages = ele['prjectsImage'];
      this.certificateImages = ele['certificates'];
    })
  }

}
