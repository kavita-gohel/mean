import { EditpostComponent } from './editpost/editpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';

import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { SocialLoginModule,AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { ProfileComponent } from './user/profile/profile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import {MatDialog, MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
// import { from } from 'rxjs';
import {MatFormField, MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CustomMaterialModule } from "./material.module";
//import { LoginComponent } from './login/login.component';
//  import { MatIcon, MatIconModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {DragDropModule} from '@angular/cdk/drag-drop';

import { RegformComponent } from './regform/regform.component';
import { MatAutocompleteModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatStepperModule } from '@angular/material';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PostsComponent } from './posts/posts.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { JwPaginationComponent } from 'jw-angular-pagination';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("712504906022-aak07l50d63a7e0j2o488o356eqm1kvp.apps.googleusercontent.com")
  },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider("3705218616259034")
  // }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    ProfileComponent,
    SingleUserComponent,
    LoginComponent,
    TodoComponent,
    PostsComponent,
    RegformComponent,
    ViewpostComponent ,
    EditpostComponent,
    JwPaginationComponent
  ],
 
  imports: [
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    CustomMaterialModule,
    NoopAnimationsModule,
    DragDropModule,
    ReactiveFormsModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  
  NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[
   
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
   
    
  ],
  providers: [ UserService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    { provide: MatDialogTitle, useValue: {} }, 
    { provide: MatDialogRef, useValue: {} }, 
    { provide: MAT_DIALOG_DATA, useValue: [] },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
