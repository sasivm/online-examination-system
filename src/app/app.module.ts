import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components from routing
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SingUpFormComponent } from './login/sing-up-form/sing-up-form.component';

// MDB Angular Free Modules
import { MDBBootstrapModule, InputsModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';

// Angular material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { UploadQuesComponent } from './upload-ques/upload-ques.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpFormComponent,
    routingComponents,
    SideNavComponent,
    HomeComponent,
    CourseDetailsComponent,
    UploadQuesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(), InputsModule, ButtonsModule, IconsModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
