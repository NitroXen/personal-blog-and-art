async function getUser(id) {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Error al obtener los datos");
      }
      return res.json();
    }
  );
}

export default getUser;
