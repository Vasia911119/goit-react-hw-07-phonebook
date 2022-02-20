import{ useState } from 'react';
import { ContactsForm, Title, Label, LabelTitle, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(state => state.items); 

  const changeInput = evt => {
    const { name, value } = evt.target;
        
      if (name === "name") {
        setName(value);
      };
      if (name === "number") {
        setNumber(value);
      };
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (checkExistContact(name)) {
      toast.error('Name is already exists !');
      reset();
      return;
    }
    dispatch(addContact({ id: nanoid(5), name, number }));
    reset();
  };

  const checkExistContact = name => {
    const result = items.some(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );

    if (result) {
      return 1;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <Title>Add new contacts:</Title>
      <Label>
        <LabelTitle>Name:</LabelTitle>
        <Input
          type="text"
          onChange={changeInput}
          value={name}
          name="name"
          placeholder="Name"
          required
        />
      </Label>
      <Label>
        <LabelTitle>Phone:</LabelTitle>
        <Input
          type="text"
          onChange={changeInput}
          value={number}
          name="number"
          placeholder="Phone number"
          required
        />
      </Label>

      <Button type="submit">
        Add
      </Button>
      <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
        />
    </ContactsForm>
  );
}

export default ContactForm;