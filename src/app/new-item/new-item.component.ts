import {Component, OnInit} from '@angular/core';
import {Item} from '../model/item';
import {ItemService} from '../shared/item.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  item = new Item();

  constructor(private itemService: ItemService,
              private router: Router,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.itemService.add(this.item).subscribe(res => {
      this.toastService.success('Success', 'Operation completed');
      this.router.navigate(['/items']);
    }, ex => {
      console.log(ex);
    });
  }

}
