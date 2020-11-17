import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTodosLosEventosComponent } from './mostrar-todos-los-eventos.component';

describe('MostrarTodosLosEventosComponent', () => {
  let component: MostrarTodosLosEventosComponent;
  let fixture: ComponentFixture<MostrarTodosLosEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTodosLosEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTodosLosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
