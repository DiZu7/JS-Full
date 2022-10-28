import { fetchUserData, fetchRepositories } from './src/scripts/gateways.js';
import { renderUserData } from './src/scripts/user.js';
import { renderRepos, cleanList } from './src/scripts/repos.js';
import { hideSpinner, showSpinner } from './src/scripts/spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10002',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const userNameInputElem = document.querySelector('.name-form__input');
const showUserBtnElem = document.querySelector('.name-form__btn');

const onSearchUser = () => {
  showSpinner();
  cleanList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => renderRepos(reposList))
    .catch(error => {
      alert(error.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

showUserBtnElem.addEventListener('click', onSearchUser);
