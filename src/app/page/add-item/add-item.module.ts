import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddItemPageRoutingModule } from './add-item-routing.module';
import { AddItemPage } from './add-item.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    AddItemPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: AddItemPage }])
  ],
  declarations: [AddItemPage]
})
export class AddItemPageModule {}
