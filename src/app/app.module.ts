import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyPollingComponent } from './faculty-polling/faculty-polling.component';
import { StudentPollingComponent } from './student-polling/student-polling.component';

@NgModule({
  declarations: [
    AppComponent,
    FacultyPollingComponent,
    StudentPollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
