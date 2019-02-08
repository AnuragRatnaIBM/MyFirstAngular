import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentIrrevelantComponent } from './content-irrevelant.component';

describe('ContentIrrevelantComponent', () => {
  let component: ContentIrrevelantComponent;
  let fixture: ComponentFixture<ContentIrrevelantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentIrrevelantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentIrrevelantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
