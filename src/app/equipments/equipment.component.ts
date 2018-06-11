import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {


  constructor(private app: AppService) { }

  ngOnInit() {

  }
  authenticated() { return this.app.authenticated; }

}
