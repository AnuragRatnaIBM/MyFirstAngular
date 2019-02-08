import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingSongComponent } from './trending-song.component';

describe('TrendingSongComponent', () => {
  let component: TrendingSongComponent;
  let fixture: ComponentFixture<TrendingSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
