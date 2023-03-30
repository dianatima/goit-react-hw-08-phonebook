import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllContacts,
  addContact,
  deleteContact,
} from "./contactsOperations";

const onPending = (state) => {
  state.isLoading = true;
};
const onRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

export const contactSlice = createSlice({
  name: "phonebook",
  initialState: { contacts: [], isLoading: false, isError: null },
  extraReducers: {
    [fetchAllContacts.pending]: onPending,
    [fetchAllContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = null;
      state.contacts = payload;
    },
    [fetchAllContacts.rejected]: onRejected,
    [addContact.pending]: onPending,
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = null;
      state.contacts.push(payload);
    },
    [addContact.rejected]: onRejected,
    [deleteContact.pending]: onPending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = null;
      const deleteIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.contacts.splice(deleteIndex, 1);
    },
    [deleteContact.rejected]: onRejected,
  },
});

export default contactSlice.reducer;
