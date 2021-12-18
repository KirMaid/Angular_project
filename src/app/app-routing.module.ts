import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor.component';
import { PreviewComponent } from './preview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/editor',
    pathMatch: 'full'
  },
  { path: 'preview', component: PreviewComponent },
  { path: 'editor', component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
