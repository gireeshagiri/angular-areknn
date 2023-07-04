import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveDyanamicFormsComponent } from '../components/reactive-dyanamic-forms/reactive-dyanamic-forms.component';
import { HomeRoutingModule } from '../router/home-routing.module';

@NgModule({
  declarations: [ReactiveDyanamicFormsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
