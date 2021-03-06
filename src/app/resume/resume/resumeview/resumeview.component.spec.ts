import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeviewComponent } from './resumeview.component';

describe('ResumeviewComponent', () => {
  let component: ResumeviewComponent;
  let fixture: ComponentFixture<ResumeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
