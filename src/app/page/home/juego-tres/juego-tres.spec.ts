import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoTres } from './juego-tres';

describe('JuegoTres', () => {
  let component: JuegoTres;
  let fixture: ComponentFixture<JuegoTres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoTres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoTres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
