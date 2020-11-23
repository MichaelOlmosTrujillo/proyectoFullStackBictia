import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCentrosCulturalesComponent } from './modal-centros-culturales.component';

describe('ModalCentrosCulturalesComponent', () => {
  let component: ModalCentrosCulturalesComponent;
  let fixture: ComponentFixture<ModalCentrosCulturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCentrosCulturalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCentrosCulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
