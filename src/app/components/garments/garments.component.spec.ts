import { ComponentFixture, TestBed } from '@angular/core/testing';

import { garmentsComponent } from './garments.component';

describe('garmentsComponent', () => {
  let component: garmentsComponent;
  let fixture: ComponentFixture<garmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [garmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(garmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
