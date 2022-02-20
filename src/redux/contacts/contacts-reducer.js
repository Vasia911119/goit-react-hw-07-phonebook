import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

import { changeFilter } from './contacts-actions';

export const itemReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [addContact.pending]: () => true,
  [deleteContact.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [addContact.fulfilled]: () => false,
  [deleteContact.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.rejected]: () => false,
});

export const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { error }) => alert(error.message),
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, { error }) =>
    alert('Add contact error: ', error.message),
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, { error }) =>
    alert('Delete contact error: ', error.message),
  [deleteContact.pending]: () => null,
});

export const rootReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  isLoading,
  error,
});
