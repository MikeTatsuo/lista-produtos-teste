import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoBoxComponent } from './mercado-box.component';

describe('MercadoBoxComponent', () => {
  let component: MercadoBoxComponent;
  let fixture: ComponentFixture<MercadoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
