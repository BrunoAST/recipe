import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPratosComponent } from './card-pratos.component';

describe('CardPratosComponent', () => {
  let component: CardPratosComponent;
  let fixture: ComponentFixture<CardPratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
