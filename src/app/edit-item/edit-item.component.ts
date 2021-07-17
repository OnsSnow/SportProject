import {Component, OnInit} from '@angular/core';
import {Item} from '../model/item';
import {ItemService} from '../shared/item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  item = new Item();
  itemId;

  constructor(private itemService: ItemService,
              private router: Router,
              private  activatedRoute: ActivatedRoute,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.itemId) {
      this.itemService.getById(this.itemId).subscribe(res => this.item = res,
        ex => console.log(ex));
    }
  }

  editItem(): void {
    this.itemService.update(this.item).subscribe(res => {
      this.toastService.success('Success', 'Operation completed');
      this.router.navigate(['/items']);
    }, ex => {
      console.log(ex);
    });
  }

}
