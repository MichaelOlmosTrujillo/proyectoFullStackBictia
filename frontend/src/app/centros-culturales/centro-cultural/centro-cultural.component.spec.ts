import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCulturalComponent } from './centro-cultural.component';

describe('CentroCulturalComponent', () => {
  let component: CentroCulturalComponent;
  let fixture: ComponentFixture<CentroCulturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroCulturalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroCulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
