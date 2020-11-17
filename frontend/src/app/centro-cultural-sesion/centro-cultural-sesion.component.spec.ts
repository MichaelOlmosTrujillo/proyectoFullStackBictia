import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCulturalSesionComponent } from './centro-cultural-sesion.component';

describe('CentroCulturalSesionComponent', () => {
  let component: CentroCulturalSesionComponent;
  let fixture: ComponentFixture<CentroCulturalSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroCulturalSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroCulturalSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
