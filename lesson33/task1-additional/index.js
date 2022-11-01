// 1. request to server
// 2. iterate commits and get commit.author
// 3. filter data by searching date;
// 4. iterate fltered data
//   4.1 create result array
//   4.2. check if result array is empty
//   4.3 if empty -> push name and emai, count = 1
//   4.2 if array is not empty -> check if this author exist in array
//      4.2.1 iterate result array
//      4.2.2 if such author exist -> add count += 1
//      4.2.3 if doesn't exist -> push name and emai, count = 1
//   4.3. return result array
// 5. return fetch

export const getMostActiveDevs = parameters => {
  const { days, userId, repoId } = parameters;
  const searchingDate = Date.now() - days * 86400000;

  return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    .then(dataCommits => dataCommits.map(({ commit }) => commit.author))
    .then(authorsData =>
      authorsData.filter(({ date }) => new Date(date).getTime() >= searchingDate),
    )
    .then(filteredByDateAuthorsInfo => {
      const result = [];

      filteredByDateAuthorsInfo.forEach(({ name, email }) => {
        if (result.length === 0) {
          result.push({ count: 1, name, email });
        } else {
          let authorExist = false;
          result.forEach(authorData => {
            if (authorData.email === email) {
              authorData.count += 1;
              authorExist = true;
            }
          });

          if (!authorExist) {
            result.push({ count: 1, name, email });
          }
        }
      });

      return result;
    });
};

getMostActiveDevs({ days: 3, userId: 'charliermarsh', repoId: 'ruff' }).then(result =>
  console.log(result),
);

// => [
//       {count: 5, name: 'Tom', email: 'tom@google.com'},
//       {count: 2, name: 'Bob', email: 'bob@google.com'},
//    ]
