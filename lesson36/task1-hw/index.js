// get request to server by fetch
// get userData ( by response.json)
// return userData.blog
// do this comands inside Promise.all (iterate users array by map)

export const getUsersBlogs = users => {
  return Promise.all(
    users.map(async userId => {
      const response = await fetch(`https://api.github.com/users/${userId}`);
      const userData = await response.json();
      return userData.blog;
    }),
  );
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
