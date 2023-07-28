import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Container, Form, Label, Input, Button } from '../style/style';

const ContactForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'number') {
      const formattedNumber = value.replace(/[^0-9]/g, '').slice(0, 7);
      const formattedValue = formattedNumber.replace(
        /(\d{3})(\d{2})(\d{2})/,
        '$1-$2-$3'
      );

      setContact(prevContact => ({
        ...prevContact,
        [name]: formattedValue,
      }));
    } else {
      setContact(prevContact => ({
        ...prevContact,
        [name]: value,
      }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = contact;

    if (/\d/.test(name)) {
      Notiflix.Notify.failure(
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore'
      );
      return;
    }

    const phoneNumberRegex = /^[\d-]+$/;
    if (!phoneNumberRegex.test(number)) {
      Notiflix.Notify.failure(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      );
      return;
    }

    if (number.length !== 9) {
      Notiflix.Notify.failure('The number must be 7 digits');
      return;
    }

    onAddContact(name, number);
    setContact({ name: '', number: '' });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={contact.number}
            onChange={handleChange}
            maxLength={9}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Container>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
