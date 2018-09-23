import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  user$: Object;
  items: any[];

  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.user$ = params.id);
     this.data.retrieveSubcatItems(this.user$).subscribe(
        data => this.items = data
     );
  }

  ngOnInit() {
    this.data.getSubcat(this.user$).subscribe(
      data => this.user$ = data
    );
  }



}
