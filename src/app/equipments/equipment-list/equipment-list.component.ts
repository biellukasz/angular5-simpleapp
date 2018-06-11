import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "../../equipment.service";
import {Equipment} from "../../model/equipment";

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  equipments: Array<Equipment>;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService.getAll().subscribe(data =>{
      this.equipments = data;
    });
  }

}
