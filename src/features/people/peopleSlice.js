import {createSlice} from "@reduxjs/toolkit";

/*
export const fetchRequest = () => {
  console.log('fetchRequest');
  return {
    type: PEOPLE_ACTIONS.FETCH_REQUEST,
  }
};

export const fetchSuccess = (response) => {
  console.log('fetchSuccess', response);
  return {
    type: PEOPLE_ACTIONS.FETCH_SUCCESS,
    response,
  }
};

export const fetchError = (error) => {
  console.log('fetchError', error);
  return {
    type: PEOPLE_ACTIONS.FETCH_ERROR,
    error
  }
};

export const peopleReducer = (state = initialState, action) => {
  const type = action.type;

  if (type === PEOPLE_ACTIONS.FETCH_REQUEST) {
    return {
      ...state,
      isLoading: true,
    }
  } else if (type === PEOPLE_ACTIONS.FETCH_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      items: action.response
    }
  } else if (type === PEOPLE_ACTIONS.FETCH_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
    }
  } else {
    return state;
  }
};
*/

/*v2
export const PEOPLE_ACTIONS = {
  FETCH_REQUEST: 'people/fetchRequest',
  FETCH_SUCCESS: 'people/fetchSuccess',
  FETCH_ERROR: 'people/fetchError',
};

export const fetchRequest = createAction(PEOPLE_ACTIONS.FETCH_REQUEST);
export const fetchSuccess = createAction(PEOPLE_ACTIONS.FETCH_SUCCESS);
export const fetchError = createAction(PEOPLE_ACTIONS.FETCH_ERROR);

export const peopleReducer = createReducer(initialState, {
  [fetchRequest]: (state, action) => {
    state.isLoading = true;
  },
  [fetchSuccess]: (state, action) => {
    state.isLoading = false;
    state.items = action.payload;
  },
  [fetchError]: (state, action) => {
    state.isLoading = false;
    state.isError = true;
  },
});


const people = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
  },
  {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
  },
  {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
  },
  {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male",
  },
  {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
  },
  {
    "name": "Owen Lars",
    "height": "178",
    "mass": "120",
    "hair_color": "brown, grey",
    "skin_color": "light",
    "eye_color": "blue",
    "birth_year": "52BBY",
    "gender": "male",
  },
  {
    "name": "Beru Whitesun lars",
    "height": "165",
    "mass": "75",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "blue",
    "birth_year": "47BBY",
    "gender": "female",
  },
  {
    "name": "R5-D4",
    "height": "97",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, red",
    "eye_color": "red",
    "birth_year": "unknown",
    "gender": "n/a",
  },
  {
    "name": "Biggs Darklighter",
    "height": "183",
    "mass": "84",
    "hair_color": "black",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "24BBY",
    "gender": "male",
  },
  {
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male",
  }
];
 */

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    fetchRequest: (state, action) => {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

export const { actions, reducer: peopleReducer } = peopleSlice;
export const { fetchRequest, fetchSuccess, fetchError } = actions;

export const selectItems = (state) => state.people.items;
export const selectLoading = (state) => state.people.isLoading;
export const selectError = (state) => state.people.isError;

export const fetchPeople = (url) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch(fetchSuccess(json.results));
    } catch (error) {
      dispatch(fetchError(error));
    }
  }
};
