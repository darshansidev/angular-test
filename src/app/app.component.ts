import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [AuthComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Testing';
  description = 'Angular Testing is Febously easy way to test angular application';
}
