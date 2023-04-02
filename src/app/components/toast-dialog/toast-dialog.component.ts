import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast-dialog',
  templateUrl: './toast-dialog.component.html',
  styleUrls: ['./toast-dialog.component.css']
})
export class ToastDialogComponent implements OnInit {

  @Input() position: string;

  constructor(private messageService: MessageService,) { }

  ngOnInit() {
  }

}
