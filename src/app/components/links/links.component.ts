import { Component, OnInit } from '@angular/core';
import { DATA } from './../../constant/constant';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  maintitle = DATA.pagelabel.link.maintitle;
  subtitle = DATA.pagelabel.link.subtitle;
  projectdetailsimagepath = DATA.path.projectdetailsimagepath;
  companyImages = [
    {
      id: 1,
      image: 'nav/projects_rwa.jpg',
      alt: 'Romance writers'
    },
    {
      id: 2,
      image: 'nav/projects_hsbc.jpg',
      alt: 'HSBC'
    },
    {
      id: 3,
      image: 'nav/projects_easyspeck.jpg',
      alt: 'App in play store'
    },
    {
      id: 4,
      image: 'nav/projects_sunlife.jpg',
      alt: 'Sunlife financial'
    },
    {
      id: 5,
      image: 'nav/projects_rg09.jpg',
      alt: 'Barclays'
    },
    {
      id: 6,
      image: 'nav/projects_bca.jpg',
      alt: 'BCA research'
    },
    {
      id: 7,
      image: 'nav/projects_amex.jpg',
      alt: 'BCA research'
    },
    {
      id: 8,
      image: 'nav/projects_advantexe.jpg',
      alt: 'Advantexe'
    },
    {
      id: 9,
      image: 'nav/projects_rockwellautomation.jpg',
      alt: 'Rockwell automation'
    },
    {
      id: 10,
      image: 'nav/projects_rage.jpg',
      alt: 'Rage Frameworks'
    },
    {
      id: 11,
      image: 'nav/projects_aptara.jpg',
      alt: 'Aptara'
    },
    {
      id: 12,
      image: 'nav/projects_walterk.jpg',
      alt: 'WK'
    },
    {
      id: 13,
      image: 'nav/projects_cisco.jpg',
      alt: 'CISCO'
    },
    {
      id: 14,
      image: 'nav/projects_bcbs.jpg',
      alt: 'ApBlue Cross Blue Shield'
    }
  ];

  certificateImages = [
    {
      id: 1,
      image: 'certification/finearts.jpg',
      alt: 'finearts'
    },
    {
      id: 2,
      image: 'certification/pim.jpg',
      alt: 'pim'
    },
    {
      id: 3,
      image: 'certification/angular.jpg',
      alt: 'Angular'
    },
    {
      id: 4,
      image: 'certification/css3.jpg',
      alt: 'css3'
    },
    {
      id: 5,
      image: 'certification/intuative_sucess.jpg',
      alt: 'intuative'
    },
    {
      id: 6,
      image: 'certification/scrum.jpg',
      alt: 'Agile'
    },
    {
      id: 7,
      image: 'certification/user_experience.jpg',
      alt: 'user experience'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
