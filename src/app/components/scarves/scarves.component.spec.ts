import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarvesComponent } from './scarves.component';

describe('ScarvesComponent', () => {
  let component: ScarvesComponent;
  let fixture: ComponentFixture<ScarvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScarvesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScarvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
