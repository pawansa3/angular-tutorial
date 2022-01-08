import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChildtoParentComponent } from './data-childto-parent.component';

describe('DataChildtoParentComponent', () => {
  let component: DataChildtoParentComponent;
  let fixture: ComponentFixture<DataChildtoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataChildtoParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChildtoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
