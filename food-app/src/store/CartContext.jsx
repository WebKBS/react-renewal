import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // state 아이템의 인덱스를 저장한다.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // 구조분해를 통해 state 아이템을 복사한다. (새로운 객체를 생성한다.)
    const updatedItems = [...state.items];

    // state 아이템의 인덱스가 0보다 크면
    if (existingCartItemIndex > -1) {
      // state 아이템의 인덱스를 찾아서 저장한다.
      const exsitngItem = state.items[existingCartItemIndex];

      // updatedItem 배열에 새로운 객체를 생성한다.
      const updatedItem = {
        ...exsitngItem,
        quantity: exsitngItem.quantity + 1,
      };

      // updatedItems 배열에 새로운 객체를 추가한다.
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // state 아이템의 인덱스를 저장한다.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // state 아이템의 인덱스를 찾아서 저장한다.
    const existingCartItem = state.items[existingCartItemIndex];

    // 구조분해를 통해 state 아이템을 복사한다. (새로운 객체를 생성한다.)
    const updatedItems = [...state.items];

    // state 아이템의 수량이 같으면
    if (existingCartItem.quantity === 1) {
      // state 아이템의 인덱스를 찾아서 삭제한다.
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
