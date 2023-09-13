import { Component, OnInit } from '@angular/core';
import { MyordersService } from './myorders.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orders:any[] = [];

constructor(private orderService:MyordersService){}

  ngOnInit(): void
  {
      this.orderService.showOrders().subscribe((data)=> {
        this.orders = data;
      //  console.log(this.cart)
      // for (const book of this.cart) {
      //   this.total = this.total + book.price;
      // }
      // this.totalAmount=this.total - this.discount;
      // console.log(this.total);
    });
    }
}

