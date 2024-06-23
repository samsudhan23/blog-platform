import { Component, NO_ERRORS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { BlogService } from '../blog.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule ],
  schemas:[NO_ERRORS_SCHEMA],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  encapsulation: ViewEncapsulation.Emulated // This is the default, but you can explicitly set it

})
export class HomepageComponent {
  blogPosts:any = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogPosts = this.blogService.getPosts();
  }
}
