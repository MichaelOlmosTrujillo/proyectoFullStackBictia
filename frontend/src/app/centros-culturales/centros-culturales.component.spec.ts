import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosCulturalesComponent } from './centros-culturales.component';

describe('CentrosCulturalesComponent', () => {
  let component: CentrosCulturalesComponent;
  let fixture: ComponentFixture<CentrosCulturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosCulturalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosCulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
