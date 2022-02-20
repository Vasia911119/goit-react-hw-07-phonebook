import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { MyPhonebook, Header, SecondHeader } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from './redux/contacts/contacts-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MyPhonebook>
        <Header>My phonebook</Header>
        <ContactForm />
        <SecondHeader>My contacts:</SecondHeader>
        <Filter />
        <ContactList />
      </MyPhonebook>
    </>
  );
};

export default App;
