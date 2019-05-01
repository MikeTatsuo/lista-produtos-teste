import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosBoxComponent } from './produtos-box.component';

describe('ProdutosBoxComponent', () => {
  let component: ProdutosBoxComponent;
  let fixture: ComponentFixture<ProdutosBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
