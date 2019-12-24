import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KnetPayComponent } from './knet-pay/knet-pay.component';
import { KnetResponseComponent } from './knet-response/knet-response.component';
import { KnetHistoryComponent } from './knet-history/knet-history.component';
import { KnetRejectComponent } from './knet-reject/knet-reject.component';
import { KnetErrorComponent } from './knet-error/knet-error.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { KnetResponseBackComponent } from './knet-response-back/knet-response-back.component';


@NgModule({
  declarations: [
    AppComponent,
    KnetPayComponent,
    KnetResponseComponent,
    KnetHistoryComponent,
    HomeComponent,
    KnetRejectComponent,
    KnetErrorComponent,
    KnetResponseBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
