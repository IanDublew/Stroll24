export function filterPostsByCategory(posts, category) {
    return posts.filter((post) => post.category === category);
  }
  