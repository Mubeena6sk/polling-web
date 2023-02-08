import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyPollingComponent } from './faculty-polling/faculty-polling.component';
import { StudentPollingComponent } from './student-polling/student-polling.component';


const routes: Routes = [
  { path: 'faculty-polling', component: FacultyPollingComponent },
  { path: 'student-polling', component: StudentPollingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
