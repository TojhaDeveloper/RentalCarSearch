import axios from 'axios';
import { keys } from '../configuraion/config';
import { FETCH_CARS, ERROR_CARS } from './types';

const ROOT_URL = keys.ROOT_URL;

export const findCar = (userData, history) => dispatch => {
  const url = `${ROOT_URL}`;
  console.log(url);

  axios
    .get(url, {
      params: {
        userData //ES2016 useData : useData can be reduced to userData
      }
    })
    .then(res => {
      console.log(res.data);
      history.push('/carLists');
      return dispatch({
        type: FETCH_CARS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: ERROR_CARS,
        payload: err.data
      })
    );
};
