import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersComponent } from './components/servers/servers.component';
import { ServerAttributeComponent } from './components/server-attribute/server-attribute.component';
import { Example1Component } from './components/example1/example1.component';
import { Assignment1Component } from './components/assignment1/assignment1.component';
import { SuccessComponent } from './components/assignment1/success/success.component';
import { WarningComponent } from './components/assignment1/warning/warning.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { Assignment3Component } from './components/assignment3/assignment3.component';
import { Databinding2Component } from './components/databinding2/databinding2.component';
import { ParentComponent } from './components/databinding/parent/parent.component';
import { ServerDetailComponent } from './components/databinding/parent/server-detail/server-detail.component';
import { ServerListComponent } from './components/databinding/parent/server-list/server-list.component';
import { ViewChildExComponent } from './components/view-child-ex/view-child-ex.component';

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
    Assignment3Component,
    Databinding2Component,
    ParentComponent,
    ServerDetailComponent,
    ServerListComponent,
    ViewChildExComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
