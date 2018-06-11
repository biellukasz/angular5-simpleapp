import { TestBed, inject } from '@angular/core/testing';

import { EquipmentService } from './equipment.service';

describe('EquipmentserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipmentService]
    });
  });

  it('should be created', inject([EquipmentService], (service: EquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
