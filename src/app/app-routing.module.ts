import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcompComponent } from './newcomp/newcomp.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path:'bala',component:SampleComponent},
  {path:'new',component:NewcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
