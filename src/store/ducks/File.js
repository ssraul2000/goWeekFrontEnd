export const Types = {
  addFile: "REQUEST_ADD_FILE",
  addSuccessFile: "SUCCESS_ADD_FILE",
  addFailFile: "FAIL_ADD_FAIL"
};

export function addFileCreator(id, data) {
  return { type: Types.addFile, payload: { data, id } };
}

const INITIAL_STATE = {
  data: {},
  isLoaded: false,
  loading: false,
  error: false
};

export function addFileReducer(state = INITIAL_STATE, action) {
  switch (action) {
    case Types.addFile: {
      return { ...state, loading: true };
    }
    case Types.addSuccessFile: {
      return {
        ...state,
        loading: false,
        isLoaded: true,
        data: action.payload.data
      };
    }
    case Types.addFailFile: {
      return { ...state, error: true };
    }
    default: {
      return state;
    }
  }
}
