function getPost(id) {
  fetch("https://jsonplaceholder.typicode.com/posts/" + id).then((response) => {
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    return response.json();
  });
}

export default getPost;
