export const addProductAction = (product: any) => ({
  type: "ADD_PRODUCT",
  payload: product,
});

export const deleteProductAction = (productId: string) => ({
  type: "DELETE_PRODUCT",
  payload: productId,
});
