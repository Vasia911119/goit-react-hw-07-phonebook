import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { ContactListStyle, Item, Name, Button } from './ContactList.styled';
import propTypes from "prop-types";

const getFilteredContacts = (items, filter) => {
  if (filter.trim() === '') {
    return items;
  }
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const items = useSelector(state => state.items);

return (<ContactListStyle>
    {getFilteredContacts(items, filter).map(({ id, name, number }) => (
      <Item key={id}>
        <Name>{name}</Name>: {number}
        <Button type="button" onClick={() => dispatch(deleteContact({ id }))}>
          X
        </Button>
      </Item>
    ))}
  </ContactListStyle>)
};

ContactList.propTypes = {
  items: propTypes.array,
  filter: propTypes.string,
};

export default ContactList;