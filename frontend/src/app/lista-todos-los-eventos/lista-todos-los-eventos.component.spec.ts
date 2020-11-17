import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTodosLosEventosComponent } from './lista-todos-los-eventos.component';

describe('ListaTodosLosEventosComponent', () => {
  let component: ListaTodosLosEventosComponent;
  let fixture: ComponentFixture<ListaTodosLosEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTodosLosEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTodosLosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
