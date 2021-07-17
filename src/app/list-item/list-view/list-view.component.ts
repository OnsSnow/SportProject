import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../model/item';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() items: Item[];
  @Output() clickDelete = new EventEmitter<any>();
  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'actions'];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  delete(id: any): void {

    const message = 'Are you sure  to delete this item?';

    const dialogData = {header: 'Confirmation', message};

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.clickDelete.emit(id);
      }
    });
  }
}
