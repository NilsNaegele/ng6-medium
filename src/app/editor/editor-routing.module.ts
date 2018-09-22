import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared';
import { EditorComponent } from './editor.component';

import { AuthGuardService } from '../core';
import { EditableArticleResolverService } from './editable-article-resolver.service';

const routes: Routes = [
      {
        path: '',
        component: EditorComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: ':slug',
        component: EditorComponent,
        resolve: {
          article: EditableArticleResolverService
        }
      }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
