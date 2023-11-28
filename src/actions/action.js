import axios from 'axios';

export const increment = (number) => {
  return {
    type: 'increment',
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: 'decrement',
  };
};

export const getAllUsers = (data) => {
  return {
    type: 'getAllUsers',
    payload: data,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/forecast?q=beirut&appid=8b0085fe50c89792c823f75df807415e'
      );

      // console.log(response.data.list);
      dispatch(getAllUsers(response.data.list));
    } catch (error) {
      console.log('first');
    }
  };
};
