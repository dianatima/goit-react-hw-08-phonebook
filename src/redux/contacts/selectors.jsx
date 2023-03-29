import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.filter.value;
export const getIsLoading = state => state.phonebook.isLoading;
export const getError = state => state.phonebook.isError;

export const selectVisibleContacts = createSelector(
    [getContacts, getFilter],
    (phonebook, filter) => {
      return phonebook.filter( contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
  );
  
  