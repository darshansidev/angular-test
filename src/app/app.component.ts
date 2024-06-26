import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { AuthComponent } from './auth/auth.component';
// import { ProductComponent } from './product/product.component';
// import { ContactComponent } from './component/contact/contact.component';
// import { FeedbackComponent } from './component/feedback/feedback.component';
// import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterModule],
  // imports: [AuthComponent, ProductComponent, ContactComponent, FeedbackComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Testing';
  description = 'Angular Testing is Febously easy way to test angular application';
}
