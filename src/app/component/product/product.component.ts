import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  params = ""
  constructor(private activateRoute: ActivatedRoute) {
    console.log(this.activateRoute.snapshot.params['id'], "<-------------------Call Activate Route--------------------------->");
    this.params = this.activateRoute.snapshot.params['id'];
  }
}
