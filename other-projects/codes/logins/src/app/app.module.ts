import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { HelpComponent } from './help/help.component';

const routes: Routes =[
  {
    path:'',
    //component: LoginComponent
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children:[
      {
        path:'',
        redirectTo: 'todo',
        pathMatch: 'full'
      },
      {
        path:'todo',
        component: TodoComponent
      },
      {
        path:'help',
        component: HelpComponent
      },
      {
        path:'about',
        component: AboutComponent
      }
    ]
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    TodoComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
