import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StarPipe } from '../../pipetype/star.pipe';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, StarPipe],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  money = 1000;

  hero = 'IronMan';
}
