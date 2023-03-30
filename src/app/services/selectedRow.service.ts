import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedRowService {

  private selectedRow: any = {};
  private selectedRowSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }

  setSelectedRow(row: any) {
    this.selectedRow = { ...row };
    this.selectedRowSubject.next(this.selectedRow);
  }

  getSelectedRow(): Observable<any> {
    return this.selectedRowSubject.asObservable();
  }
}