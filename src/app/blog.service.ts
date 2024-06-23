import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts = [
    { id: 1, title: 'Holi Tour 2024', excerpt: 'This is the first blog post',
       content: 'Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their.',
       maincontend:'The India for Beginners annual Women-Only Holi Tour was a big hit with participant Darcy H. – as you can read from her very detailed review below.The tour itinerary started in Delhi and included a visit to Sariska tiger reserve, four days in Jaipur – where we celebrated Holi at a fabulous private party – and then, at the end, we went to the Taj Mahal. I accompanied the tour and had a great time with the group, which also included Rita, Kathy, Paola, and Maria. Here’s Darcy’s review.What I loved most about India was both cultural and spiritual. It is truly a mystical country — a walk in time that is rich in cultural heritage and history, vibrant and colourful, and alive with tradition. After researching online for solo trips to India, I found the India for Beginners Women-Only Holi Tour and immediately it felt as though the trip was designed specifically for me and my interests. As a solo female traveller, the small group tour provided me the opportunity to explore India safely and at a well-balanced pace, and to only experience those places and activities that interested me. As a result, I enjoyed everything during my 11 days on the ground in India. From the monuments of Delhi to the hospitality of Jaipur the “Pink City” and the Mughal-era city of Agra and the beautiful and iconic Taj Mahal, and everything in between.From beginning to end everything ran extremely smooth and I felt immersed into a taste of India –a taste that leaves you wanting to come back for more. The accommodations were lovely, including a hospitable Homestay in Delhi, a boutique hotel in Jaipur and a luxury hotel and spa in Agra. Indian cuisine is arguably one of the world’s most popular styles and I was excited for my own foodie experiences, and every meal was an event unto itself', 
       image: '../../assets/images/holi.jpeg' },
    { id: 2, title: 'Winter: Beaches', excerpt: 'This is the second blog post', 
      content: 'The Winter Season is the ideal time to head to parts of tropical India especially those places of outstanding beauty that are difficult to visit when the mercury rises. The Winters in India are never particularly harsh except for places situated ',image: '../../assets/images/india.jpg' },
    { id: 3, title: 'Darjeeling', excerpt: 'This is the Third blog post', content: 'The picturesque hill station of Darjeeling is a place that captures the most vivid imagination. Darjeeling is known as the ‘Queen of the Hills’ and rightly so as it is framed by the mighty Himalayas and resplendent with carpets of tea',image: '../../assets/images/dar.jpg' },
    // Add more blog posts as needed
  ];

  constructor() { }

  getPosts() {
    return this.blogPosts;
  }

  getPost(id: number) {
    return this.blogPosts.find(post => post.id === id);
  }
}
