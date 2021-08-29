import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components from routing
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SingUpFormComponent } from './login/sing-up-form/sing-up-form.component';

// MDB Angular Free Modules
// import { MDBBootstrapModule, InputsModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';

// Angular material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

// to resize left and right view in test module
import { ResizableDirective } from './test-portal/resizable.directive'; 

import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { UploadQuesComponent } from './upload-ques/upload-ques.component';
import { ToolBarComponent } from './home/tool-bar/tool-bar.component';
import { AccountInfoComponent } from './profile/account-info/account-info.component';
import { LeftViewComponent } from './test-portal/left-view/left-view.component';
import { RightViewComponent } from './test-portal/right-view/right-view.component';


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
    ToolBarComponent,
    AccountInfoComponent,
    LeftViewComponent,
    RightViewComponent,
    ResizableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
