import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { HdService } from '../../services/hd.service';
import moment from 'moment';
import { OPTIONS_HD_TYPE, OPTIONS_HD_PRIORITY, OPTIONS_HD_STATUS, } from '../../constants/constants';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-hd',
  templateUrl: './create-hd.component.html',
  styleUrls: ['./create-hd.component.css']
})

export class CreateHdComponent implements OnInit {

  myForm: FormGroup;

  // Enuns
  optionsHdType = OPTIONS_HD_TYPE;
  optionsHdTypeSelected = 'HELP';
  optionsHdStatusSelected = 'IN_PROGRESS';
  optionsHdPrioritySelected = 'NORMAL';
  optionsHdPriority = OPTIONS_HD_PRIORITY;
  optionsHdStatus = OPTIONS_HD_STATUS;

  constructor(
    private fb: FormBuilder, 
    private serviceHd: HdService,
    private messageService: MessageService,) { }

  get hdTitle() {
    return this.myForm.get("hdTitle");
  }
  get hdType() {
    return this.myForm.get("hdType");
  }
  get hdStatus() {
    return this.myForm.get("hdStatus");
  }
  get hdPriority() {
    return this.myForm.get("hdPriority");
  }
  get hdCreateDate() {
    return this.myForm.get("hdCreateDate");
  }
  get hdDescription() {
    return this.myForm.get("hdDescription");
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      hdTitle: ["", [Validators.required]],
      hdType: ["", [Validators.required]],
      hdStatus: ["", [Validators.required]],
      hdPriority: ["", [Validators.required]],
      hdCreateDate: [moment().format('DD/MM/YYYY HH:mm'), [Validators.required]],
      hdDescription: ["", [Validators.required]],
      selectControl: [Validators.required],
      options: [Validators.required],
    },
      {
        updateOn:
          "blur"
      });
  }

  onChange(selectedValue: string) {
    console.log(selectedValue);
  }

  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  onSubmit() {
    const _form = this.myForm.value
    this.serviceHd.postHds(_form).subscribe(data => {
      console.log(data)
      this.addSingle()
    });
  }

}
