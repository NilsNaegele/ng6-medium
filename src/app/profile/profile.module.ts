import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { ProfileFavoritesComponent } from './profile-favorites/profile-favorites.component';
import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';


@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent, ProfileFavoritesComponent, ProfileArticlesComponent]
})
export class ProfileModule { }
