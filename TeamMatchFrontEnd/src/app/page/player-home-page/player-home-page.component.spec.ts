import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHomePageComponent } from './player-home-page.component';

describe('PlayerHomePageComponent', () => {
  let component: PlayerHomePageComponent;
  let fixture: ComponentFixture<PlayerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
