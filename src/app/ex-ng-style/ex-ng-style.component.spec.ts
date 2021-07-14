import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNgStyleComponent } from './ex-ng-style.component';

describe('ExNgStyleComponent', () => {
  let component: ExNgStyleComponent;
  let fixture: ComponentFixture<ExNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExNgStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
