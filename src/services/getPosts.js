async function getPosts() {
  const allPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await allPosts.json();
}

export default getPosts;
