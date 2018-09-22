import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
import { FavoriteButtonComponent } from './buttons/favorite-button/favorite-button.component';
import { FollowButtonComponent } from './buttons/follow-button/follow-button.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        ListErrorsComponent,
        ShowAuthedDirective,
        ArticleListComponent,
        ArticleMetaComponent,
        ArticlePreviewComponent,
        FavoriteButtonComponent,
        FollowButtonComponent ],
    exports: [
        ArticleListComponent,
        ArticleMetaComponent,
        ArticlePreviewComponent,
        CommonModule,
        FavoriteButtonComponent,
        FollowButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ListErrorsComponent,
        ShowAuthedDirective,
        RouterModule
    ]
})
export class SharedModule {}
