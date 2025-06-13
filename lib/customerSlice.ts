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
    editCustomerById(state, action) {
      const { id, data } = action.payload;
      const customerToEdit = state.customer.find(
        (customer) => customer.id === id
      );
      if (customerToEdit) {
        Object.assign(customerToEdit, data);
      }
    },
    deleteCustomer(state, action) {
      state.customer = state.customer.filter(
        (customer) => customer.id !== action.payload
      );
    },
  },
});

export const { addCustomer, editCustomerById, deleteCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;
