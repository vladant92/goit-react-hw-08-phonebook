import React from 'react';
import { Wrapper, PhoneIcon, UserIcon, Button } from './ContactListItem.styled';
import { toast } from 'react-hot-toast';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selectors';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsLoading);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.error('Delete contact successfully');
  };

  return (
    <Wrapper>
      <p>
        <UserIcon /> {contact.name}
      </p>
      <p>
        <PhoneIcon /> {contact.number}
      </p>
      <Button
        onClick={() => handleDeleteContact(contact.id)}
        disabled={isFetching}
      >
        Delete
      </Button>
    </Wrapper>
  );
};

export default ContactListItem;
