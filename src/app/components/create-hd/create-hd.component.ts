import { Component, OnInit } from '@angular/core';
import { 
  FormGroup,
  FormBuilder,
  Validators 
} from '@angular/forms';

import { HdService } from '../../services/hd.service';
import moment from 'moment';

@Component({
  selector: 'app-create-hd',
  templateUrl: './create-hd.component.html',
  styleUrls: ['./create-hd.component.scss']
})

export class CreateHdComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private serviceHd: HdService) { }

  get hdTitle() {
    return this.myForm.get("hdTitle");
  }
  get htType() {
    return this.myForm.get("htType");
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
      htType: ["", [Validators.required]],
      hdPriority: ["", [Validators.required]],
      hdCreateDate: [moment().format('DD/MM/YYY HH:mm'), [Validators.required]],
      hdDescription: ["", [Validators.required]],
    },
    {
      updateOn: 
      "blur" 
    });
  }

  onSubmit() {
    const _form = this.myForm.value
    this.serviceHd.postHds(_form).subscribe(data => {
      console.log(data)
    });
  }

}
