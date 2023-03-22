import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { HdService } from './services/hd.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableHomeComponent } from './components/table-home/table-home.component';
import { CreateHdComponent } from './components/create-hd/create-hd.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainscreenComponentComponent } from './components/mainscreen-component/mainscreen-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableHomeComponent,
    CreateHdComponent,
    NotFoundComponent,
    MainscreenComponentComponent,
    FooterComponent,
    ModalEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
