import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosEscenariosComponent } from './videos-escenarios.component';

describe('VideosEscenariosComponent', () => {
  let component: VideosEscenariosComponent;
  let fixture: ComponentFixture<VideosEscenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosEscenariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosEscenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
