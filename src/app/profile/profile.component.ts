import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, Profile, User } from '../core';
import { concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  currentUser: User;
  isUser: boolean;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.route.data.pipe(
      concatMap((data: { profile: Profile}) => {
        this.profile = data.profile;
        return this.userService.currentUser.pipe(tap(
          (userData: User) => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.username === this.profile.username);
          }
        ));
      })
    ).subscribe();
  }

  onToggleFollowing(following: boolean) {
    this.profile.following = following;
  }

}
