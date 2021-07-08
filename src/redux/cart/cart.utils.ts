export const addItemToCart = (cartItems: any, cartItemToAdd: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) =>
      cartItem.id === cartItemToAdd.id &&
      cartItem.passengers === cartItemToAdd.passengers,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id &&
      cartItem.passengers === cartItemToAdd.passengers
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems: any, cartItemToRemove: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) =>
      cartItem.id === cartItemToRemove.id &&
      cartItem.passengers === cartItemToRemove.passengers,
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem: any) => cartItem.id !== cartItemToRemove.id,
    );
  }

  return cartItems.map((cartItem: any) =>
    cartItem.id === cartItemToRemove.id &&
    cartItem.passengers === cartItemToRemove.passengers
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
