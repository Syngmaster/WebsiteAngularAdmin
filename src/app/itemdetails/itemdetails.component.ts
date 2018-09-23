import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.scss']
})
export class ItemdetailsComponent implements OnInit {

  item: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe( params => this.item = params.id);
  }

  ngOnInit() {
    this.data.retrieveSubcatItem(this.item).subscribe(
      data => this.item = data
    );
  }

  updateItem() {
    this.replaceWithInput('name');
    this.replaceWithInput('price');
    this.replaceWithInput('description');
    this.replaceWithInput('sale');
  };

  replaceWithInput(elementID: string) {
    let element = document.getElementById(elementID) as HTMLElement
    let d;
    if (elementID == "description") {
      d = document.createElement('textarea');
    } else {
      d = document.createElement('input');
    }
    d.value = element.innerHTML;
    element.parentNode.replaceChild(d, element);
  }

}
