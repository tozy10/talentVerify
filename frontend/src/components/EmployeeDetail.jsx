import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const EmployeeDetail = () => {
  const { id } = useParams(); // Extract the ID from the URL parameters
  const [employeeData, setEmployeeData] = useState(null); // Initialize with null

  useEffect(() => {
    // Fetch the employee data from the API based on the ID
    axios.get(`http://127.0.0.1:8000/employees/${id}`)
      .then(response => {
        setEmployeeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]); // Dependency array includes id to re-fetch if id changes

  if (!employeeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Body>
          <Card.Title>{employeeData.employee_name}</Card.Title>
          <Card.Text>
            <strong>ID:</strong> {employeeData.employee_id}
          </Card.Text>
          <Card.Text>
  <strong>Company Name:</strong> {employeeData.company_name}
</Card.Text>
<Card.Text>
  <strong>Registration Date:</strong> {employeeData.registration_date}
</Card.Text>
<Card.Text>
  <strong>Registration Number:</strong> {employeeData.registration_number}
</Card.Text>
<Card.Text>
  <strong>Address:</strong> {employeeData.address}
</Card.Text>
<Card.Text>
  <strong>Contact Person:</strong> {employeeData.contact_person}
</Card.Text>
<Card.Text>
  <strong>Departments:</strong> {employeeData.departments}
</Card.Text>
<Card.Text>
  <strong>Number of Employees:</strong> {employeeData.number_of_employees}
</Card.Text>
<Card.Text>
  <strong>Contact Phone:</strong> {employeeData.contact_phone}
</Card.Text>
<Card.Text>
  <strong>Email:</strong> {employeeData.email}
</Card.Text>


<Card.Text>
  <strong>Department:</strong> {employeeData.department}
</Card.Text>
<Card.Text>
  <strong>Role:</strong> {employeeData.role}
</Card.Text>
<Card.Text>
  <strong>Date Started:</strong> {employeeData.date_started}
</Card.Text>
<Card.Text>
  <strong>Date Left:</strong> {employeeData.date_left}
</Card.Text>
<Card.Text>
  <strong>Duties:</strong> {employeeData.duties}
</Card.Text>


        </Card.Body>
      </Card>
    </div>
  );
};

export default EmployeeDetail;
