export const PEOPLE_ACTIONS = {
  FETCH_REQUEST: 'people/fetchRequest',
  FETCH_SUCCESS: 'people/fetchSuccess',
  FETCH_ERROR: 'people/fetchError',
};

export const fetchRequest = () => {
  return {
    type: PEOPLE_ACTIONS.FETCH_REQUEST,
  }
};

export const fetchSuccess = (response) => {
  return {
    type: PEOPLE_ACTIONS.FETCH_SUCCESS,
    response,
  }
};

export const fetchError = (error) => {
  return {
    type: PEOPLE_ACTIONS.FETCH_ERROR,
    error
  }
};

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
};

export const peopleReducer = (state = initialState, action) => {
  const type = action.type;

  if (type === PEOPLE_ACTIONS.FETCH_REQUEST) {
    return {
      ...state,
      isLoading: true
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
      items: [],
    }
  } else {
    return state;
  }
};
