import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoItemComponent } from './mercado-item.component';

describe('MercadoItemComponent', () => {
  let component: MercadoItemComponent;
  let fixture: ComponentFixture<MercadoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
