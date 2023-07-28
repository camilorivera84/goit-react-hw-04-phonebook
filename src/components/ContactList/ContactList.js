import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ContactName, DeleteButton } from '../style/style';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List className="list_contacts">
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactName>{contact.name}:</ContactName> {contact.number}
          <DeleteButton
            className="delete-button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
