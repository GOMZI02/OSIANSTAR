import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lausComponent } from './laus.component';

describe('lausComponent', () => {
  let component: lausComponent;
  let fixture: ComponentFixture<lausComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lausComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(lausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
