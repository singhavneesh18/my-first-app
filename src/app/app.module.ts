import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerAttributeComponent } from './server-attribute/server-attribute.component';
import { Example1Component } from './example1/example1.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { SuccessComponent } from './assignment1/success/success.component';
import { WarningComponent } from './assignment1/warning/warning.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerAttributeComponent,
    Example1Component,
    Assignment1Component,
    SuccessComponent,
    WarningComponent,
    DatabindingComponent,
    Assignment2Component,
    Assignment3Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
