import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyordersService {

  constructor(private httpClient:HttpClient) { }

  public showOrders() : Observable<any>
  {
    const options={
      withCredentials:true
    }
      return this.httpClient.get('http://localhost:8087/orders/myorders',options);
  }

}
