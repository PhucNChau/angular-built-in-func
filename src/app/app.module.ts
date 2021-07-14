import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExNgStyleComponent } from './ex-ng-style/ex-ng-style.component';
import { ExNgClassComponent } from './ex-ng-class/ex-ng-class.component';
import { ExNgForComponent } from './ex-ng-for/ex-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    ExNgStyleComponent,
    ExNgClassComponent,
    ExNgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
