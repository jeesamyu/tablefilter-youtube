import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EffectubeComponent } from './effectube/effectube.component';
import { YoutubeComponent } from './youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EffectubeComponent,
    YoutubeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
