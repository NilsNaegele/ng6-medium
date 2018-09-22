import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { EditorRoutingModule } from './editor-routing.module';

import { EditorComponent } from './editor.component';

@NgModule({
  imports: [
    SharedModule,
    EditorRoutingModule
  ],
  declarations: [EditorComponent]
})
export class EditorModule { }
