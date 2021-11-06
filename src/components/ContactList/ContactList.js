import React from 'react';
import { ContactItem, BtnDelete } from './ContactList.styled';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { onFilteredContacts } from '../../redux/selectors';

function ContactList() {
  const contacts = useSelector(onFilteredContacts);

  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={shortid.generate()}>
          <p>
            {name}: {number}
          </p>
          <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </BtnDelete>
        </ContactItem>
      ))}
    </ul>
  );
}

export default ContactList;
