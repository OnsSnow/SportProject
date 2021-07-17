import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewItemComponent} from './new-item/new-item.component';
import {EditItemComponent} from './edit-item/edit-item.component';
import {ListItemComponent} from './list-item/list-item.component';

const routes: Routes = [
  {path: 'items/new', component: NewItemComponent},
  {path: 'items/edit/:id', component: EditItemComponent},
  {path: 'items', component: ListItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
