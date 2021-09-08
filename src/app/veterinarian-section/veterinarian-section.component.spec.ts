import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianSectionComponent } from './veterinarian-section.component';

describe('VeterinarianSectionComponent', () => {
  let component: VeterinarianSectionComponent;
  let fixture: ComponentFixture<VeterinarianSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarianSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarianSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
