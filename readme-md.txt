# My Personal Website

This is a personal website built with Jekyll and hosted on GitHub Pages. It features a responsive design, blog functionality, image gallery, and embedded videos.

## Features

- Responsive design that works on mobile and desktop
- Blog section with post pagination and categories
- Image gallery for showcasing projects or photos
- Video page for embedding YouTube content
- Clean, modern styling with customizable colors

## Local Development

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Installation

1. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```

2. Clone this repository:
   ```
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

3. Install dependencies:
   ```
   bundle install
   ```

4. Run the local development server:
   ```
   bundle exec jekyll serve
   ```

5. View your site at `http://localhost:4000`

## Customization

### Site Information

Edit the `_config.yml` file to update:
- Site title and description
- Your contact information
- Social media links
- Other Jekyll settings

### Content

- Update the pages in the root directory (`index.md`, `about.md`, etc.)
- Add blog posts to the `_posts` directory following the naming convention `YYYY-MM-DD-title.md`
- Modify layouts in the `_layouts` directory
- Edit includes (header, footer, etc.) in the `_includes` directory

### Styling

- Main styles are in `assets/css/main.scss`
- Individual component styles are in the `_sass` directory

## Deployment

This site is designed to be deployed on GitHub Pages:

1. Commit your changes:
   ```
   git add .
   git commit -m "Update website content"
   ```

2. Push to GitHub:
   ```
   git push origin main
   ```

3. GitHub will automatically build and deploy your site to `https://yourusername.github.io`

## License

[MIT License](LICENSE)
