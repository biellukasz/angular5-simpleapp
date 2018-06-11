import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {EquipmentService} from "../../../equipment.service";
import {Equipment} from "../../../model/equipment";
import 'rxjs/add/observable/throw';
import {Property} from "../../../model/property";
import {Comments} from "../../../model/comment";

@Component({
  selector: 'app-equipment-manager',
  templateUrl: './equipment-manager.component.html',
  styleUrls: ['./equipment-manager.component.css']
})
export class EquipmentManagerComponent implements OnInit {


  equipment: Equipment = new Equipment();
  equipmentTypes:Array<string>;
  equipmentPropertis: Array<Property> = new Array();
  equipmentComments: Array<Comments> = new Array();
  form: FormGroup;
  formComments: FormGroup;


  constructor(private equipmentService: EquipmentService,private fb: FormBuilder) {
  }

  ngOnInit() {
    this.equipmentService.getAllTypes().subscribe(data =>{
      this.equipmentTypes = data;
    });
    this.buildForm();
  }

  createEquipment(): void {
    this.equipmentService.createEquipment(this.equipment)
      .subscribe( data => {
        alert("Equipment created successfully.");
        console.log(data.uuid);

        this.createPropertysList(data.uuid);
        this.createCommetsList(data.uuid);
        this.equipmentService.createProperties(this.equipmentPropertis)
          .subscribe(data =>{
          });
        this.equipmentService.createComments(this.equipmentComments)
          .subscribe(data=>{
          });
        location.reload();
      });

  };
  buildForm(): void {
    this.form = this.fb.group({
      properties: this.fb.array([])
    });
    this.formComments = this.fb.group({
      comments: this.fb.array([])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      parameterName: '',
      parameterValue: ''
    });
  }
  createComment(): FormGroup {
    return this.fb.group({
      commentValue: ''
    });
  }
  addItem(): void {
    let propertiesArray = this.form.get('properties') as FormArray;
    const newItem = this.createItem();
    propertiesArray.push(newItem);
  }
  addComment(): void {
    let commentsArray = this.formComments.get('comments') as FormArray;
    const newItem = this.createComment();
    commentsArray.push(newItem);
  }
  createPropertysList(equuid:string):void{
    let propertiesArray = this.form.get('properties') as FormArray;
    for (let pro of propertiesArray.value) {
      let property = new Property();
      property.equipmentUUID = equuid;
      property.parameterName = pro.parameterName;
      property.parameterValue = pro.parameterValue;
      this.equipmentPropertis.push(property);
    }
  }
  createCommetsList(equuid:string):void{
    let propertiesArray = this.formComments.get('comments') as FormArray;
    for (let pro of propertiesArray.value) {
      let comment = new Comments();
      comment.equipmentUUID = equuid;
      comment.comment = pro.comment;
      this.equipmentComments.push(comment);
    }
  }
}
