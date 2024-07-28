import { FETCH_SHELTERS_SUCCESS } from './types';
import { fetchShelters } from '../../utils/api';


export const fetchSheltersAction = () => async (dispatch) => {
  try {
    const data = await fetchShelters();
    dispatch({
      type: FETCH_SHELTERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error('Error fetching shelters:', error);
  }
};
