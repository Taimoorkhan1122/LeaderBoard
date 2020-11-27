export const AppReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return state.map((item) =>
        item.id === action.payload ? { ...item, score: item.score + 1 } : item
      );
    case "DECREMENT":
      return state.map((item) =>
        item.id === action.payload ? { ...item, score: item.score - 1 } : item
      );

    default:
      return state;
  }
};
