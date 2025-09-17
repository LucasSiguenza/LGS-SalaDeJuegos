import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoUno } from './juego-uno';

describe('JuegoUno', () => {
  let component: JuegoUno;
  let fixture: ComponentFixture<JuegoUno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoUno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoUno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
