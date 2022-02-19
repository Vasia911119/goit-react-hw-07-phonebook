import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { MyPhonebook, Header, SecondHeader } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact, changeFilter, addContact } from './redux/actions';

const App = () => {
  const items = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  return (
    <>
      <MyPhonebook>
        <Header>My phonebook</Header>
        <ContactForm onSubmit={addContact} contacts={items} />
        <Filter value={filter} onChange={changeFilter} />
        <SecondHeader>My contacts:</SecondHeader>
        <ContactList onDelete={deleteContact} />
      </MyPhonebook>
    </>
  );
};

export default App;
