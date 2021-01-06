import { INCREMENT, DECREMENT } from "../actionTypes";

const initialState = {
  value: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        value: state.value + 1
      };
    }
    case DECREMENT: {
      const { id } = action.payload;
      return {
        value: state.value - 1
      };
    }
    default:
      return state;
  }
}
