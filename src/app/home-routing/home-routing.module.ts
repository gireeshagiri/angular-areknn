import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveDyanamicFormsComponent } from '../components/reactive-dyanamic-forms/reactive-dyanamic-forms.component';

const routes: Routes = [
  { path: '', component: ReactiveDyanamicFormsComponent },
];
@NgModule({
  // imports: [CommonModule],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
