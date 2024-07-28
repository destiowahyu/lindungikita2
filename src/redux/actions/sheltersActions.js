// src/redux/actions/sheltersActions.js

import { FETCH_SHELTERS_SUCCESS } from './types';
import { fetchShelters } from '../../utils/api'; // Import fetchShelters function

// Action creator to fetch shelters
export const fetchSheltersAction = () => async (dispatch) => {
  try {
    const data = await fetchShelters();
    dispatch({
      type: FETCH_SHELTERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error('Error fetching shelters:', error);
    // Handle error (optional)
  }
};
