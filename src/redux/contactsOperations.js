import { createAsyncThunk } from '@reduxjs/toolkit';
import * as fetchContactsAPI from '../services/contactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContactsAPI.fetchAllContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = await fetchContactsAPI.addContact({ name, number });
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const contact = await fetchContactsAPI.deleteContact(contactId);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
