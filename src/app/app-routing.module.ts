import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { ListAllItemsComponent } from './list-all-items/list-all-items.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';

const routes: Routes = [
  { path:'add-new-item', component: AddNewItemComponent },
  { path:'list-all-items', component: ListAllItemsComponent },
  { path:'subcategory/:id', component: SubcategoryComponent },
  { path:'item-details/:id', component: ItemdetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
