import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { ProductComponent } from './component/product/product.component';
import { SimpleformComponent } from './forms/simpleform/simpleform.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'simpleForm', component: SimpleformComponent },
];
