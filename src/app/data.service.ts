import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map, filter, scan, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Observable<any[]>;
  subcatItems: Observable<any[]>;
  database: AngularFireDatabase;

  constructor(public db: AngularFireDatabase) {
    this.database = db; 
    this.items = db.list('MEN/Subcategory').valueChanges();
  }

  getSubcats() {
    return this.items;
  }

  getSubcat(itemID) {
    return this.items.pipe(map(items => items.find(item => item.title == itemID)));
  }

  retrieveSubcatItems(subcatTitle) {
    this.subcatItems = this.database.list('MEN/Subcategory/' + subcatTitle + "/Items").valueChanges(); 
    return this.subcatItems
  }

  retrieveSubcatItem(subcatTitle) {
    return this.subcatItems.pipe(map(subcatItems => subcatItems.find(subcatItem => subcatItem.itemName == subcatTitle)));
  }
  
}
