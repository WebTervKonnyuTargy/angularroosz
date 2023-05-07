import { Component, OnInit } from '@angular/core';
import { Burger } from '../../shared/models/Burger';
import { orderService } from '../../shared/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class orderComponent implements OnInit {

  orderObject?: Array<Burger>;
  chosenImage?: Burger;

  constructor(private orderService: orderService) { }

  ngOnInit(): void {
    this.orderService.loadImageMeta('__credits.json').subscribe((data: Array<Burger>) => {
      this.orderObject = data;
    })
  }

  loadImage(imageObject: Burger) {
    this.chosenImage = imageObject;
  }

}
