import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDeChat } from './sala-de-chat';

describe('SalaDeChat', () => {
  let component: SalaDeChat;
  let fixture: ComponentFixture<SalaDeChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaDeChat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaDeChat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
