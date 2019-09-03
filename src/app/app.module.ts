import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ImageService } from './services/image.service';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ThingsComponent } from './pages/things/things.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MenuComponent,
    HomeComponent,
    NotificationsComponent,
    ThingsComponent
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
