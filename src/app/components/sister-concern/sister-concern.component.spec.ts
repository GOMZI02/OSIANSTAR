import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisterConcernComponent } from './sister-concern.component';

describe('SisterConcernComponent', () => {
  let component: SisterConcernComponent;
  let fixture: ComponentFixture<SisterConcernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisterConcernComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisterConcernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
