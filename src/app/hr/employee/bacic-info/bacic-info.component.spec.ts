import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacicInfoComponent } from './bacic-info.component';

describe('BacicInfoComponent', () => {
  let component: BacicInfoComponent;
  let fixture: ComponentFixture<BacicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
