export const fetchUserData = async userName => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw new Error('Failed load data');
  }
};

export const fetchRepositories = async url => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw new Error('Failed load data');
  }
};
