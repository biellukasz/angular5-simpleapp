import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentManagerComponent } from './equipment-manager.component';

describe('EquipmentManagerComponent', () => {
  let component: EquipmentManagerComponent;
  let fixture: ComponentFixture<EquipmentManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
