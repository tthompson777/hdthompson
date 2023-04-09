import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private fecharModalSubject = new Subject<void>();
  public fecharModal$ = this.fecharModalSubject.asObservable();

  constructor() { }

  fecharModal() {
    this.fecharModalSubject.next();
  }
}