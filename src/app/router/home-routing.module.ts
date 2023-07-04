import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveDyanamicFormsComponent } from "../components/reactive-dyanamic-forms/reactive-dyanamic-forms.component";

const routes: Routes = [
  {path:'', component:ReactiveDyanamicFormsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }