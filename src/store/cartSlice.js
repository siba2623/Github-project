import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}
};

// items shape: { [productId]: { product, quantity } }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action){
      const product = action.payload;
      const id = product.id;
      if(!state.items[id]){
        state.items[id] = { product, quantity: 1 };
      }
      // else do nothing (Add button becomes disabled in UI)
    },
    increase(state, action){
      const id = action.payload;
      if(state.items[id]) state.items[id].quantity += 1;
    },
    decrease(state, action){
      const id = action.payload;
      if(!state.items[id]) return;
      state.items[id].quantity -= 1;
      if(state.items[id].quantity <= 0){
        delete state.items[id];
      }
    },
    removeItem(state, action){
      const id = action.payload;
      if(state.items[id]) delete state.items[id];
    }
  }
});

export const { addToCart, increase, decrease, removeItem } = cartSlice.actions;

export const selectCartItems = state => Object.values(state.cart.items);
export const selectTotalCount = state => selectCartItems(state).reduce((s,i)=>s+i.quantity,0);
export const selectTotalCost = state => selectCartItems(state).reduce((s,i)=>s+i.quantity * i.product.price,0);

export default cartSlice.reducer;
