import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app/app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total: any = [];
  grandTotal = 0;
  cartItemCount: any = [];
  cartItemCountTotal = 0;
  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.Data.cartList.forEach((product: any) => {
      this.total[product.id] = product.cartCount * product.newPrice;
      this.grandTotal += product.cartCount * product.newPrice;
      this.cartItemCount[product.id] = product.cartCount;
      this.cartItemCountTotal += product.cartCount;
    })
  }

  public updateCart(value: any) {
    if (value) {
      this.total[value.productId] = value.total;
      this.cartItemCount[value.productId] = value.soldQuantity;
      this.grandTotal = 0;
      this.total.forEach((price: any) => {
        this.grandTotal += price;
      });
      this.cartItemCountTotal = 0;
      this.cartItemCount.forEach((count: any) => {
        this.cartItemCountTotal += count;
      });

      this.appService.Data.totalPrice = this.grandTotal;
      this.appService.Data.totalCartCount = this.cartItemCountTotal;

      this.appService.Data.cartList.forEach(product => {
        this.cartItemCount.forEach((count: any, index: any) => {
          if (product.id == index) {
            product.cartCount = count;
          }
        });
      });

    }
  }

  public remove(product: any) {
    const index: number = this.appService.Data.cartList.indexOf(product);
    if (index !== -1) {
      this.appService.Data.cartList.splice(index, 1);
      this.grandTotal = this.grandTotal - this.total[product.id];
      this.appService.Data.totalPrice = this.grandTotal;
      this.total.forEach((val: any) => {
        if (val == this.total[product.id]) {
          this.total[product.id] = 0;
        }
      });

      this.cartItemCountTotal = this.cartItemCountTotal - this.cartItemCount[product.id];
      this.appService.Data.totalCartCount = this.cartItemCountTotal;
      this.cartItemCount.forEach((val: any) => {
        if (val == this.cartItemCount[product.id]) {
          this.cartItemCount[product.id] = 0;
        }
      });
      this.appService.resetProductCartCount(product);
    }
  }

  public clear() {
    this.appService.Data.cartList.forEach(product => {
      this.appService.resetProductCartCount(product);
    });
    this.appService.Data.cartList.length = 0;
    this.appService.Data.totalPrice = 0;
    this.appService.Data.totalCartCount = 0;
  }

}
