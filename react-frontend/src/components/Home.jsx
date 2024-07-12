import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import EmployeeList from './Employees';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    company_name: '',
    registration_date: '',
    registration_number: '',
    address: '',
    contact_person: '',
    departments: '',
    number_of_employees: '',
    contact_phone: '',
    email: '',
    employee_name: '',
    employee_id: '',
    department: '',
    role: '',
    date_started: '',
    date_left: '',
    duties: ''
  });

  const [employees, setEmployees] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/employees/?format=api', formData)
      .then(response => {
        console.log('Data sent:', response.data);
        setEmployees(response.data); // Update state with fetched data
        navigate("/home")
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {/* Company Fields */}
        <Form.Group className="mb-3" controlId="company_name">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registration_date">
          <Form.Label>Registration Date</Form.Label>
          <Form.Control
            type="date"
            name="registration_date"
            value={formData.registration_date}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registration_number">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control
            type="text"
            name="registration_number"
            value={formData.registration_number}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contact_person">
          <Form.Label>Contact Person</Form.Label>
          <Form.Control
            type="text"
            name="contact_person"
            value={formData.contact_person}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="departments">
          <Form.Label>Departments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="departments"
            value={formData.departments}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="number_of_employees">
          <Form.Label>Number of Employees</Form.Label>
          <Form.Control
            type="number"
            name="number_of_employees"
            value={formData.number_of_employees}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contact_phone">
          <Form.Label>Contact Phone</Form.Label>
          <Form.Control
            type="tel"
            name="contact_phone"
            value={formData.contact_phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Employee Fields */}
        <Form.Group className="mb-3" controlId="employee_name">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            name="employee_name"
            value={formData.employee_name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="employee_id">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            name="employee_id"
            value={formData.employee_id}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="department">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date_started">
          <Form.Label>Date Started</Form.Label>
          <Form.Control
            type="date"
            name="date_started"
            value={formData.date_started}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date_left">
          <Form.Label>Date Left</Form.Label>
          <Form.Control
            type="date"
            name="date_left"
            value={formData.date_left}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duties">
          <Form.Label>Duties</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="duties"
            value={formData.duties}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Home;
