const readFromLocalStorage = (data) => {
  switch (data.type) {
    case 'USER_DATA':
      const user = window.localStorage.getItem('user');
      console.log(`Read from local storage: ${user}`);

      return user ? JSON.parse(user) : user;
    default:
      return null;
  }
};

const saveToLocalStorage = (data) => {
  switch (data.type) {
    case 'USER_DATA':
      window.localStorage.setItem('user', JSON.stringify(data.payload));
      const user = window.localStorage.getItem('user');
      if (!user || user === '') {
        return false;
      }
      console.log(`Saved to local storage: ${user}`);
      return true;
    default:
      return false;
  }
};

const removeFromLocalStorage = (data) => {
  switch (data.type) {
    case 'USER_DATA':
      window.localStorage.removeItem('user');
      const user = window.localStorage.getItem('user');
      if (user) {
        return false;
      }
      console.log(`Removed from local storage: ${user}`);
      return true;
    default:
      return false;
  }
};

export const getUserDataFromLocalStorage = () => {
  const localStorageData = { type: 'USER_DATA' };
  const dataReadFromLocalStorage = readFromLocalStorage(localStorageData);
  return dataReadFromLocalStorage;
};

export const saveUserDataToLocalStorage = (userData) => {
  const localStorageData = { type: 'USER_DATA', payload: userData };
  const localStorageModificationStatus = saveToLocalStorage(localStorageData);
  return localStorageModificationStatus;
};

export const removeUserDataFromLocalStorage = () => {
  const localStorageData = { type: 'USER_DATA' };
  const localStorageModificationStatus = removeFromLocalStorage(localStorageData);
  return localStorageModificationStatus;
};
