import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../core';

import { SettingsComponent } from './settings.component';

const routes: Routes = [
    {
      path: '',
      component: SettingsComponent,
      canActivate: [AuthGuardService]
    }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
