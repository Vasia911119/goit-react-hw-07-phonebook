import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { MyPhonebook, Header, SecondHeader } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { contactsOperations, itemsSelector } from './redux';

const App = () => {
  const items = useSelector(itemsSelector.getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MyPhonebook>
        <Header>My phonebook</Header>
        <ContactForm />
        <SecondHeader>My contacts:</SecondHeader>
        {items.length > 0 && <Filter />}
        {items.length > 0 ? <ContactList /> : <p>Your phonebook is empty</p>}
      </MyPhonebook>
    </>
  );
};

export default App;
