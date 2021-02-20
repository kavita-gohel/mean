import { RegformComponent } from './regform/regform.component';
import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { UserService } from './service/user.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
      path: '',
      component: AppComponent,
      children: [
         { path: '', 
          component : LoginComponent}

      ]
    }, 
     {path: 'dashboard', component: UserListComponent },
    {path: 'profile', component: SingleUserComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'reg', component:RegformComponent}
    // {path: '', redirectTo: '/login', pathMatch: 'full' },
    // {path: 'login', component: LoginComponent}
  ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponent = [ProfileComponent, SingleUserComponent, UserListComponent, AppComponent, LoginComponent]