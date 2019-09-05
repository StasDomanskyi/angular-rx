import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ImageService } from './core/imageService/image.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MapComponent } from './pages/map/map.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    FormComponent,
    HomeComponent,
    MapComponent,
    MenuComponent,
    NotificationsComponent,
    
  ],
  imports: [
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXqn7ywSOZd_6o8C9wypree7s1kHrftyA'
    }),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
