---
layout: default
title: Home
---

<div class="hero">
  <h1>Welcome to My Personal Website</h1>
  <p>Hi, I'm Your Name. I'm a web developer, designer, and tech enthusiast.</p>
  <a href="/about" class="button">Learn More About Me</a>
</div>

<section class="featured-section">
  <h2>Featured Projects</h2>
  <div class="featured-grid">
    <div class="featured-item">
      <img src="/assets/images/project1.jpg" alt="Project 1">
      <h3>Project One</h3>
      <p>A brief description of your first featured project goes here. What technologies did you use? What problems did you solve?</p>
      <a href="#" class="read-more">View Project</a>
    </div>
    
    <div class="featured-item">
      <img src="/assets/images/project2.jpg" alt="Project 2">
      <h3>Project Two</h3>
      <p>A brief description of your second featured project goes here. What makes this project special or unique?</p>
      <a href="#" class="read-more">View Project</a>
    </div>
  </div>
</section>

<section class="latest-posts">
  <h2>Latest Blog Posts</h2>
  <ul class="post-list">
    {% for post in site.posts limit:3 %}
    <li class="post-item">
      <h3 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h3>
      <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <div class="post-excerpt">
        {{ post.excerpt }}
      </div>
      <a href="{{ post.url | relative_url }}" class="read-more">Read More</a>
    </li>
    {% endfor %}
  </ul>
  <a href="/blog" class="button">View All Posts</a>
</section>

<style>
/* Home Page Specific Styles */
.hero {
  text-align: center;
  padding: 80px 20px;
  background-color: var(--secondary-color);
  color: white;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 30px;
}

.button {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2980b9;
}

.featured-section, .latest-posts {
  margin-bottom: 60px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
}

.featured-item {
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.featured-item:hover {
  transform: translateY(-5px);
}

.featured-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.featured-item h3, .featured-item p {
  padding: 0 20px;
}

.featured-item h3 {
  color: var(--secondary-color);
  margin-top: 20px;
}

.read-more {
  display: inline-block;
  margin: 0 20px 20px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.read-more:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
  }
}
</style>
