// get request to server by fetch
// get userData ( by response.json)
// return userData.blog
// do this comands inside Promise.all (iterate users array by map)

export const getUsersBlogs = async users => {
  const result = await Promise.all(
    users.map(userId => {
      return fetch(`https://api.github.com/users/${userId}`)
        .then(response => response.json())
        .then(userData => userData.blog);
    }),
  );
  return result;
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
