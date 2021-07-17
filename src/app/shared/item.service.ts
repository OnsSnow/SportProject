import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.url);
  }
  public search(params): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.url + params);
  }
  public getById(id): Observable<Item> {
    return this.httpClient.get<Item>(this.url + '/' + id);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }

  public add(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.url, item);
  }

  public update(item: Item): Observable<Item> {
    return this.httpClient.put<Item>(this.url + '/' + item.id, item);
  }
}
