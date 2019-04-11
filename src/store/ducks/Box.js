export const Types = {
  addBox: "REQUEST_ADD_BOX",
  successBox: "SUCCESS_ADD_BOX",
  failBox: "FAIL_ADD_BOX"
};

export function addBoxCreator(title) {
  return {
    type: Types.addBox,
    payload: {
      title
    }
  };
}
const INITIAL_STATE = {
  data: {},
  isLoaded: false,
  loading: false,
  error: false
};

export default function addBoxReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.addBox: {
      return { ...state, loading: true };
    }
    case Types.successBox: {
      return { ...state, loading: false, data: action.payload.data };
    }
    case Types.failBox: {
      return { ...state, error: true };
    }
    default: {
      return state;
    }
  }
}
