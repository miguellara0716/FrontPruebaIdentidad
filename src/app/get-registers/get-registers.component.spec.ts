import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRegistersComponent } from './get-registers.component';

describe('GetRegistersComponent', () => {
  let component: GetRegistersComponent;
  let fixture: ComponentFixture<GetRegistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRegistersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
