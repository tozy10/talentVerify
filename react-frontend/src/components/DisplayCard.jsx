import React from 'react';
import Card from 'react-bootstrap/Card';

const DisplayCard = ({ employee }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{employee.employee_name}</Card.Title>
        <Card.Text>
          <strong>ID:</strong> {employee.employee_id}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DisplayCard;
