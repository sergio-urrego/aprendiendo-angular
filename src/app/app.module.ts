import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { countermodule } from './counter/counter.module';
import { Heroesmodule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    countermodule,
    Heroesmodule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
