import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://620290c64d21c200170b987a.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'items/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const addContact = createAsyncThunk(
  'items/addContact',
  async ({ name, number }) => {
    const contact = {
      name,
      number,
    };
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'items/deleteContact',
  async ({ id }) => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);
