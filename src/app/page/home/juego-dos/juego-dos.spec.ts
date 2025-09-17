import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDos } from './juego-dos';

describe('JuegoDos', () => {
  let component: JuegoDos;
  let fixture: ComponentFixture<JuegoDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoDos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoDos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
