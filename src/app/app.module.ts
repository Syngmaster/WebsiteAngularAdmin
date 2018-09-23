import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { ListAllItemsComponent } from './list-all-items/list-all-items.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddNewItemComponent,
    ListAllItemsComponent,
    SubcategoryComponent,
    ItemdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
