export const AppReducer = (state, action) => {
  console.log(state.data);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload ? { ...item, score: item.score + 1 } : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload ? { ...item, score: item.score - 1 } : item
        ),
      };

    default:
      return state;
  }
};
