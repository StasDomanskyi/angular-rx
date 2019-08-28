import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ImageService } from './services/image.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
