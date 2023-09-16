
import axios from 'axios';

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('/login', { username, password });
    const user = response.data.user;

    dispatch({
      type: 'LOGIN_USER',
      payload: user,
    });
  } catch (error) {
    console.error('Błąd logowania:', error);
  }
};

export const logoutUser = () => (dispatch) => {
  axios.post('/logout').then(() => {
    dispatch({ type: 'LOGOUT_USER' });
  });
};
