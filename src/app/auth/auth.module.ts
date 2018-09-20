import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';


@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [ AuthComponent ]
})
export class AuthModule { }
