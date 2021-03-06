import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // return {
      //     counter: state.counter + 1
      // }
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUBTRACT:
      return {
        counter: state.counter - action.value,
      };
    case actionTypes.STORE_RESULT:
        return {
            ...state,
            result: state.results.concat({id: new Date(), value: state.counter})
        }
  }

  return state;
};

export default reducer;