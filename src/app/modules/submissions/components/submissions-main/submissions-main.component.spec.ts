import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsMainComponent } from './submissions-main.component';

describe('SubmissionsMainComponent', () => {
  let component: SubmissionsMainComponent;
  let fixture: ComponentFixture<SubmissionsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmissionsMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmissionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
