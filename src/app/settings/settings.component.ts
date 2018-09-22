import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService, User } from '../core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: User = {} as User;
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService) {
                this.settingsForm = this.fb.group({
                    image: '',
                    username: '',
                    bio: '',
                    email: '',
                    password: ''
                });
              }

  ngOnInit() {
    Object.assign(this.user, this.userService.getCurrentUser());
    this.settingsForm.patchValue(this.user);
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  submitForm() {
    this.isSubmitting = true;
    this.updateUser(this.settingsForm.value);
    this.userService.update(this.user)
                     .subscribe(
                       updatedUser => this.router.navigateByUrl('/profile/' + updatedUser.username),
                       error => {
                         this.errors = error;
                         this.isSubmitting = false;
                       }
                     );
  }

  updateUser(values: Object) {
    Object.assign(this.user, values);
  }

}
