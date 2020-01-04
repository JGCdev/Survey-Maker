import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaCreadaComponent } from './encuesta-creada.component';

describe('AjustesComponent', () => {
  let component: EncuestaCreadaComponent;
  let fixture: ComponentFixture<EncuestaCreadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaCreadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaCreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
