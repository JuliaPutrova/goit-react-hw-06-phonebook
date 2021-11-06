import { LabelName, Search, BtnContact, FormSt } from './ContactForm.styled';
import { useState } from 'react';
import shortid from 'shortid';
import { addContact } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.items);
  const dispatch = useDispatch();

  //метод, который будет обновлять состояние input
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  //метод для отправки form
  const handleSubmit = e => {
    //функция, чтобы старница не перезагружалась при submit
    e.preventDefault();

    if (contacts.map(contact => contact.name).includes(name)) {
      alert(`Sorry, but ${name} is already in contacs.`);
    }

    //передаем props Компонента ContactForm (ребенка) в Компонент App (родитель)
    const addNewContact = {
      // id: shortid.generate(),
      //короткая запись свойств объекта
      name,
      number,
      id: shortid.generate(),
    };

    dispatch(addContact(addNewContact));
    //после submit сбрасываем все поля input
    reset();
  };

  //метод, который сбрасывает все поля input
  const reset = () => {
    // setId('');
    setName('');
    setNumber('');
  };

  return (
    <FormSt onSubmit={handleSubmit}>
      <LabelName>
        {' '}
        Name
        <Search
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </LabelName>
      <LabelName>
        Number
        <Search
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </LabelName>
      <BtnContact type="submit">Add contact</BtnContact>
    </FormSt>
  );
}

export default ContactForm;
