import { Component } from '@angular/core';
import { ArticlesComponent } from './articles/articles';

@Component({
  selector: 'app-root',
  imports: [ArticlesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = 'Article Site';
}