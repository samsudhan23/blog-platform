import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';

const routes = [
  { path: '', component: HomepageComponent },
  { path: 'post/:id', component: BlogPostDetailComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())]
};
