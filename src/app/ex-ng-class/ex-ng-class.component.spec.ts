import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNgClassComponent } from './ex-ng-class.component';

describe('ExNgClassComponent', () => {
  let component: ExNgClassComponent;
  let fixture: ComponentFixture<ExNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExNgClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
