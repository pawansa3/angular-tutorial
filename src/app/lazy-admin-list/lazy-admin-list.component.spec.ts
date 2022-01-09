import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyAdminListComponent } from './lazy-admin-list.component';

describe('LazyAdminListComponent', () => {
  let component: LazyAdminListComponent;
  let fixture: ComponentFixture<LazyAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
