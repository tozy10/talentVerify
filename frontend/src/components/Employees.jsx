import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios.get('http://127.0.0.1:8000/employees/')
      .then(response => {
        console.log('Fetched data:', response.data);
        setEmployees(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h2>Employee List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {employees.map(employee => (
          <Link 
            to={{
              pathname: `/EmployeeDetail/${employee.employee_id}`,
              state: { employee } // Pass employee data in state
              
            }}
            
            key={employee.employee_id}
            style={{ textDecoration: 'none' }} // Optional: Remove underline
          >
            <Card style={{ width: '18rem', margin: '1rem', cursor: 'pointer' }}>
              <Card.Body>
                <Card.Title>{employee.employee_name}</Card.Title>
                <Card.Text>
                  <strong>ID:</strong> {employee.employee_id}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          
        )
        
        )
        
      }
      
      </div>
    </div>
  );
};

export default EmployeeList;
