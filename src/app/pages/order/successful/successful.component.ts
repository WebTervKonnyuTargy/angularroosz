import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.scss']
})
export class SuccessfulComponent implements OnInit {

  mennyiseg: number = 0;

  constructor(private actRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) => {
      this.mennyiseg=param.mennyiseg as number;
      console.log(this.mennyiseg+' db burger');
    })
  }

  goBack() {
    this.location.back();
  }
}
