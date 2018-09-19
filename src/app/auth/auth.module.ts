import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
]);

@NgModule({
  imports: [
    authRouting,
    SharedModule
  ],
  declarations: [ AuthComponent ]
})
export class AuthModule { }
