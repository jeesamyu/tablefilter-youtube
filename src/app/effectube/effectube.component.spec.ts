import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectubeComponent } from './effectube.component';

describe('EffectubeComponent', () => {
  let component: EffectubeComponent;
  let fixture: ComponentFixture<EffectubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
