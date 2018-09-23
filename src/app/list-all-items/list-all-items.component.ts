import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-all-items',
  templateUrl: './list-all-items.component.html',
  styleUrls: ['./list-all-items.component.scss']
})

export class ListAllItemsComponent {
  title = 'Volga Vintage';
  description = 'database';
 
  itemValue = '';
  menItems: Observable<any[]>;
  womenItems: Observable<any[]>;
  unisexItems: Observable<any[]>;

  users$: any[];

  // constructor(public db: AngularFireDatabase) {
  //   this.menItems = db.list('MEN/Subcategory').valueChanges();
  //   this.womenItems = db.list('WOMEN/Subcategory').valueChanges();
  //   this.unisexItems = db.list('UNISEX/Subcategory').valueChanges();
  // }

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSubcats().subscribe(
      data => this.users$ = data 
    );
  }
 
  // onSubmit() {
  //   this.db.list('/items/item').push({ content: this.itemValue });
  //   this.itemValue = '';
  // }
}
