import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetpasswordComponent } from './Components/Forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { NotesComponent } from './Components/notes/notes.component';
import { AuthgaurdGuard } from './authgaurd.guard';
const routes: Routes = [
  { path: '', redirectTo:"/signin", pathMatch:'full' },
  { path: 'register', component:RegisterComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent, },
  { path: 'resetpassword', component: ResetpasswordComponent, },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthgaurdGuard],
  children: [
    {path: 'archive', component: ArchiveComponent},
    {path: 'trash', component: TrashComponent},
    {path: 'notes' , component: NotesComponent}
  ]}

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
