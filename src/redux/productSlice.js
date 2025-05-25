import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thunk";

const productSlice = createSlice({
    name: "products",
    initialState: {
        productsList: [],
        loading: false,
        error: false,
    },
    reducers: {

    }, extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.productsList = action.payload;
            })
            .addCase(fetchDataAsyncAction.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
}
);

export default productSlice.reducer;
