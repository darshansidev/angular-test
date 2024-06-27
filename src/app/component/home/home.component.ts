import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit(): void {
    console.log('<---------------------------Call Home Init Component--------------------------->')
  }

  ngAfterViewInit(): void {
    console.log('<---------------------------Call Home AfterViewInit Component--------------------------->')
  }

}
