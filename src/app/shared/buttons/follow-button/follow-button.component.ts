import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, ProfilesService, Profile } from '../../../core';

import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent {
  @Input() profile: Profile;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(private router: Router,
              private userService: UserService,
              private profilesService: ProfilesService) { }

  toggleFollowing() {
    this.isSubmitting = true;
    this.userService.isAuthenticated.pipe(concatMap(
      (authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return of(null);
        }

        if (!this.profile.following) {
          return this.profilesService.follow(this.profile.username)
                                     .pipe(tap(data => {
                                       this.isSubmitting = false;
                                       this.toggle.emit(true);
                                     },
                                      error => this.isSubmitting = false
                                     ));
        } else {
          return this.profilesService.unfollow(this.profile.username)
                                     .pipe(tap(data => {
                                       this.isSubmitting = false;
                                       this.toggle.emit(false);
                                     },
                                      error => this.isSubmitting = false
                                     ));
        }
      }
    )).subscribe();
  }

}
