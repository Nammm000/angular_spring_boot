import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforTagComponent } from './infor-tag.component';

describe('InforTagComponent', () => {
  let component: InforTagComponent;
  let fixture: ComponentFixture<InforTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
