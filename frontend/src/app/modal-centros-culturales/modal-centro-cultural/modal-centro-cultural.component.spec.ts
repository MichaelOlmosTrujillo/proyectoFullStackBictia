import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCentroCulturalComponent } from './modal-centro-cultural.component';

describe('ModalCentroCulturalComponent', () => {
  let component: ModalCentroCulturalComponent;
  let fixture: ComponentFixture<ModalCentroCulturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCentroCulturalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCentroCulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
