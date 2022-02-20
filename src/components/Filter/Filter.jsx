import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { FindForm, Title, Label, LabelTitle, Input } from './Filter.styled';

const Filter = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter)
  const getVisibleContacts = event => {
    dispatch(changeFilter(event.target.value));
  };

    return (
      items.length > 0 &&
      <FindForm>
        <Title>Find contacts:</Title>
        <Label>
          <LabelTitle>find:</LabelTitle>
          <Input
            type="text"
            onChange={getVisibleContacts}
            value={filter}
            name="filter"
            placeholder="Find name"
          />
        </Label>
      </FindForm>
    )
};

export default Filter;