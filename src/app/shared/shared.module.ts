import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [ ListErrorsComponent, ShowAuthedDirective ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ListErrorsComponent,
        ShowAuthedDirective,
        RouterModule
    ]
})
export class SharedModule { }