import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input } from '../style/style';

const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <Label>
        Find contacts by name:
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
