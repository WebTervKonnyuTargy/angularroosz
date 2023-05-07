import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Burger } from '../../../shared/models/Burger';
import { Rendeles } from '../../../shared/models/Rendeles';
import { orderService } from '../../../shared/services/order.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() imageInput?: Burger;
  loadedImage?: string;

  orders: Array<Rendeles> = [];

  orderForm = this.createForm({
    nev: '',
    rendeltId: '',
    mennyiseg: 0,
    date: new Date()
  });

  constructor(private fb: FormBuilder, private router: Router, private orderService: orderService) { }

  ngOnChanges(): void {
    if (this.imageInput?.id) {
      this.orderService.loadImage('burgers/'+this.imageInput?.id + '.jpg').subscribe(data => {
       this.loadedImage=data;
      });
    }
  }

  ngOnInit(): void {
    
    
  }

  createForm(model: Rendeles) {
    let formGroup = this.fb.group(model);
    formGroup.get('mennyiseg')?.addValidators([Validators.required, Validators.min(1)]);
    return formGroup;
  }

  addComment() {
    if (this.orderForm.valid) {
      if (this.orderForm.get('mennyiseg')) {
        this.orderForm.get('date')?.setValue(new Date());
        this.orderForm.get('nev')?.setValue('Joszi');
        this.orderForm.get('rendeltId')?.setValue('buri');
        this.orders.push({ ...this.orderForm.value });


        this.router.navigateByUrl('/order/successful/' + this.orderForm.get('mennyiseg')?.value);
      }
    }
  }

}
