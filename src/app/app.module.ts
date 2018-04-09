import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BotonChidoComponent } from './components/boton-chido/boton-chido.component';


@NgModule({
  declarations: [
    AppComponent,
    BotonChidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
