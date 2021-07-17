import {Component, OnInit} from '@angular/core';
import {ItemService} from '../shared/item.service';
import {Item} from '../model/item';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.itemService.getAll().subscribe(data => this.items = data,
      ex => console.log(ex));
  }

  delete(event): void {
    this.itemService.delete(event).subscribe(res => {
      this.toastService.success('Success', 'Operation completed');
      this.getAll();
    }, ex => {
      console.log(ex);
    });
  }

  searchItem(event): void {
    let params = '?';
    if (event.name) {
      params += 'name_like=' + event.name + '&';
    }
    if (event.category) {
      params += 'category=' + event.category + '&';
    }

    if (event.min) {
      params += 'price_gte=' + event.min + '&';
    }
    if (event.max) {
      params += 'price_lte=' + event.max ;
    }
    this.itemService.search(params).subscribe(data => this.items = data,
      ex => console.log(ex));
  }
}
