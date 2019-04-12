export const Types = {
  addBox: "REQUEST_ADD_BOX",
  successBox: "SUCCESS_ADD_BOX",
  failBox: "FAIL_ADD_BOX",
  requestBox: "REQUEST_BOX"
};

export function addBoxCreator(title) {
  return {
    type: Types.addBox,
    payload: {
      title
    }
  };
}
export function requestBox(data) {
  return {
    type: Types.requestBox,
    payload: {
      data
    }
  };
}
const INITIAL_STATE = {
  data: {},
  isLoaded: false,
  loading: false,
  error: false
};

export function addBoxReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.addBox: {
      return { ...state, loading: true };
    }
    case Types.successBox: {
      return {
        ...state,
        isLoaded: true,
        loading: false,
        data: action.payload.data
      };
    }
    case Types.failBox: {
      return { ...state, error: true };
    }
    default: {
      return state;
    }
  }
}

export function boxReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.requestBox: {
      return { ...state, data: action.payload.data };
    }
    default: {
      return state;
    }
  }
}
