const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter(
          (product: any) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
