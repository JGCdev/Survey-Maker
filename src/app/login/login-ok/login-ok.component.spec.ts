import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOkComponent } from './login-ok.component';

describe('LoginOkComponent', () => {
  let component: LoginOkComponent;
  let fixture: ComponentFixture<LoginOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
