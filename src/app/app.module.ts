import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'pokemonDB',
  version: 1,
  objectStoresMeta: [{
    store: 'pokemon',
    storeConfig: null,
    storeSchema: [
      { name: 'height', keypath: 'height', options: { unique: false }},
      { name: 'id', keypath: 'id', options: { unique: false }},
      { name: 'name', keypath: 'name', options: { unique: false }},
      { name: 'sprites', keypath: 'sprites', options: { unique: false }},
      { name: 'stats', keypath: 'stats', options: { unique: false }},
      { name: 'types', keypath: 'types', options: { unique: false }},
      { name: 'weight', keypath: 'weight', options: { unique: false }}
    ]
  }]

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
