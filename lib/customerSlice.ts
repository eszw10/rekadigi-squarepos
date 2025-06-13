import { customers } from "@/data/customers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: customers,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.customer.push(action.payload);
    },
    deleteCustomer(state, action) {
      state.customer = state.customer.filter(
        (customer) => customer.id !== action.payload
      );
    },
  },
});

export const { addCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
