import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {KnetPayComponent} from './knet-pay/knet-pay.component';
import {KnetResponseComponent} from './knet-response/knet-response.component';
import {KnetHistoryComponent} from './knet-history/knet-history.component';
import {KnetRejectComponent} from './knet-reject/knet-reject.component';
import {KnetErrorComponent} from './knet-error/knet-error.component';
import {KnetResponseBackComponent } from './knet-response-back/knet-response-back.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pay', component: KnetPayComponent },
  //{ path: 'angular/pay', component: KnetPayComponent },
  { path: 'ASWeb/faces/portlets/retail/knet/response', component: KnetResponseComponent },
  { path: 'responseback', component: KnetResponseBackComponent },
  //{ path: 'responseback', redirectTo: '/response', pathMatch: 'full'  },
  { path: 'reject', component: KnetRejectComponent },
  { path: 'error', component: KnetErrorComponent },
  { path: 'history', component: KnetHistoryComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
