import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
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

  return (items.length > 0 ?
    <ContactListStyle>
    {getFilteredContacts(items, filter).map(({ id, name, phone }) => (
      <Item key={id}>
        <Name>{name}</Name>: {phone}
        <Button type="button" onClick={() => dispatch(deleteContact({ id }))}>
          X
        </Button>
      </Item>
    ))}
  </ContactListStyle> : <p>Your phonebook is empty</p>)
};

ContactList.propTypes = {
  items: propTypes.array,
  filter: propTypes.string,
};

export default ContactList;