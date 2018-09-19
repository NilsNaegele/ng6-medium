import { NoAuthGuardService } from './no-auth-guard.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuardService]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuardService]
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
