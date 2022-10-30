import { fetchUserData, fetchRepositories } from './src/scripts/gateways.js';
import { renderUserData } from './src/scripts/user.js';
import { renderRepos, cleanList } from './src/scripts/repos.js';
import { hideSpinner, showSpinner } from './src/scripts/spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const userNameInputElem = document.querySelector('.name-form__input');
const showUserBtnElem = document.querySelector('.name-form__btn');

const onSearchUser = async () => {
  showSpinner();
  cleanList();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};

showUserBtnElem.addEventListener('click', onSearchUser);
