import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DiaryComponent } from './components/diary/diary.component';
import { DiarysComponent } from './components/diarys/diarys.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diarys', component: DiarysComponent, canActivate: [AuthGuardService] },
  { path: 'diary/:diaryId', component: DiaryComponent, canActivate: [AuthGuardService] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuardService] },

  { path: '**', redirectTo: '' } // otherwise redirect to home
  //{ path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }