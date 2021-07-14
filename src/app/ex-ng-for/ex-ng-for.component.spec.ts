import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNgForComponent } from './ex-ng-for.component';

describe('ExNgForComponent', () => {
  let component: ExNgForComponent;
  let fixture: ComponentFixture<ExNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
