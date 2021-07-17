import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from '../../model/item';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  itemFilter: any = {};
  @Output() filter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.filter.emit(this.itemFilter);
  }
}
