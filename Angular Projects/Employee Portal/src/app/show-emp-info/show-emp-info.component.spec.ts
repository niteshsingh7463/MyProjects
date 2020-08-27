import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpInfoComponent } from './show-emp-info.component';

describe('ShowEmpInfoComponent', () => {
  let component: ShowEmpInfoComponent;
  let fixture: ComponentFixture<ShowEmpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEmpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
