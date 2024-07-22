import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarysComponent } from './diarys.component';

describe('DiarysComponent', () => {
  let component: DiarysComponent;
  let fixture: ComponentFixture<DiarysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiarysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
