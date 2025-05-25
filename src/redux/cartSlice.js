import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsInCart: [],
        totalPrice: 0,
        delivery: false
    },
    reducers: {
        addToCart: (state, action) => {
            const productInCart = state.productsInCart.find(product => product.id === action.payload.id);
            if (!productInCart)
                state.productsInCart.push(action.payload);
        },
        addAmount: (state, action) => {
            const productInCart = state.productsInCart.find(product => product.id === action.payload);
            if (productInCart) {
                productInCart.amount++;
                productInCart.intermediateSum = productInCart.intermediateSum + productInCart.price;
            }
        },
        removeAmount: (state, action) => {
            const productInCart = state.productsInCart.find(product => product.id === action.payload);
            if (productInCart && productInCart.amount > 1) {
                productInCart.amount--;
                productInCart.intermediateSum = productInCart.intermediateSum - productInCart.price;
            }
        },
        removeFromCart: (state, action) => {
            state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload);
        },
        calcTotalPrice: state => {
            state.totalPrice = state.productsInCart.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price * currentValue.amount;
            }, 0);
        },
        setDelivery: state => {
            state.delivery = !state.delivery
            if (state.delivery)
                state.totalPrice += 50;
            if (!state.delivery)
                state.totalPrice -= 50;
        },
        finishOrder: state => {
            state.productsInCart = [];
        }
    }

})

export const { addToCart, addAmount, removeAmount, removeFromCart, calcTotalPrice, setDelivery, finishOrder } = cartSlice.actions;
export default cartSlice.reducer;