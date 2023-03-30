import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateMessageFormatCompiler, MESSAGE_FORMAT_CONFIG } from 'ngx-translate-messageformat-compiler';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ModalModule } from 'ngx-bootstrap/modal';
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

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler,
      },
    }),
    ModalModule.forRoot(),
  ],
  entryComponents: [
    ModalEditComponent
  ],
  providers: [
    HdService,
    { 
      provide: MESSAGE_FORMAT_CONFIG, 
      useValue: { 
        locales: ['pt-br']
      } 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
