import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://620290c64d21c200170b987a.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'items/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      throw e;
    }
  }
);

export const addContact = createAsyncThunk(
  'items/addContact',
  async ({ name, number }) => {
    try {
      const contact = {
        name,
        number,
      };
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (e) {
      throw e;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'items/deleteContact',
  async ({ id }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (e) {
      throw e;
    }
  }
);
