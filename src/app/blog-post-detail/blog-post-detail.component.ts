import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { CommentSectionComponent } from '../comment-section/comment-section.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-post-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, CommentSectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  templateUrl: './blog-post-detail.component.html',
  styleUrl: './blog-post-detail.component.scss',
  encapsulation: ViewEncapsulation.Emulated // This is the default, but you can explicitly set it

})
export class BlogPostDetailComponent {
  blogPost: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId !== null) {
      this.blogPost = this.blogService.getPost(+postId);
      console.log('this.blogPost: ', this.blogPost);
    } else {
      // Handle the case when postId is null
      console.error('Post ID is null');
    }
  }


  comments: string[] = []; // Explicitly specify the type as string[]
  newComment = '';

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  }

  Cancel() {
    this.router.navigateByUrl('');
  }
  likeStatus: boolean[] = this.comments.map(() => true);

  likebtn(index:any) {
console.log( this.likeStatus,' this.likeStatus');    
    this.likeStatus[index] = !this.likeStatus[index];

  }
}
