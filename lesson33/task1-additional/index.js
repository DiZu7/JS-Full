// 1. request to server
// 2. iterate commits and get commit.author
// 3. filter data by searching date;
// 4. iterate fltered data
//   4.1 create result array
//   4.2. check if result array is empty
//   4.3 if empty -> push name and emai, count = 1
//   4.2 check if this author exist in array (use flag is false by dafault )
//      4.2.1 iterate result array
//      4.2.2 if such author exist -> add count += 1 and change flag is true
//      4.2.3 if doesn't exist (flag is false) -> push name and emai, count = 1
//   4.3. return result array
// 5. return fetch

const daysAgo = num => {
  const now = new Date();
  return new Date(now.setDate(now.getDate() - num));
};

export const getMostActiveDevs = parameters => {
  const { days, userId, repoId } = parameters;

  return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    .then(dataCommits => dataCommits.map(({ commit }) => commit.author))
    .then(authorsData =>
      authorsData.filter(({ date }) => new Date(date).getTime() >= daysAgo(days)),
    )
    .then(filteredByDateAuthorsInfo => {
      const result = [];

      filteredByDateAuthorsInfo.map(({ name, email }) => {
        if (result.length === 0) {
          result.push({ count: 1, name, email });
        }

        let authorExist = false;
        result.map(authorData => {
          if (authorData.email === email) {
            authorData.count += 1;
            authorExist = true;
          }
        });

        if (!authorExist) {
          result.push({ count: 1, name, email });
        }
      });

      return result;
    });
};

// getMostActiveDevs({ days: 3, userId: 'charliermarsh', repoId: 'ruff' }).then(result =>
//   console.log(result),
// );

// => [
//       {count: 5, name: 'Tom', email: 'tom@google.com'},
//       {count: 2, name: 'Bob', email: 'bob@google.com'},
//    ]
