import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Wwwmodel, Works, Project } from './../models/wwwmodel.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class W3esearviceMainService {
  private works: Works[] = [];
  // localData = environment.localData;

  dbworksone = environment.dbworksone;
  dbskillsone = environment.dbskillsone;
  dbexperienceone = environment.dbexperienceone;
  dbprojectsone = environment.dbprojectsone;

  headers: HttpHeaders = new HttpHeaders();
  headersx = this.headers.append('Accept', 'application/json');

 

  // creating observable
  private subject = new BehaviorSubject<Works[]>([]);
  projectsw3earth$: Observable<any[]> = this.subject.asObservable();

  constructor(private http: HttpClient) { }

  
  getAllWorks() { 
    this.http.get<Works[]>(this.dbworksone, {headers: this.headersx})
    .pipe( map(row => row = row['works']) )
    .subscribe((res) => {
      this.works = res;
      this.subject.next([...this.works]);
    }      
    );
  }

  getAllSkills() {
    return this.http.get(this.dbskillsone);
  }
  getAllExperience() {
    return this.http.get(this.dbexperienceone);
  }
  getAllProjects() {
    return this.http.get<Project[]>(this.dbprojectsone, {headers: this.headersx}).pipe(
      map(res => res['projects']), shareReplay()
      // map(res => this.subject.next(res['projects'])), shareReplay()
    )
  }



  // new method
  astroService(a) {
    return this.http.post(`https://aztro.sameerkumar.website?sign=${a}&day=today`, {})
  }
  
  
}
