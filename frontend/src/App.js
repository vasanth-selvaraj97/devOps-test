/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState} from 'react';
import axios from 'axios';

const serverPort = 3001; 
const serverURL = `http://localhost:${serverPort}/`;

function CustomerApp(){

  const [customers,setCustomers] = useState([])

  useEffect(()=>{
    async function getCustomers(){
      
  
      try {
        const response = await axios.get(serverURL);
        setCustomers(response.data)
      } catch (error) {
        alert(error);
      }
    }
    getCustomers();
  },[])
  return(<div>
    { customers!==0 && 
      <div>
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>No of Employees</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => 
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.employees}</td>
                  <td>{customer.size}</td>
                </tr>  
              )}
            </tbody>
          </table>
        </div>
      </div>
    }
  </div>)
}

function App() {
  return (
    <div>
      <h1>Welcome to Customer App</h1>
      <CustomerApp/>
    </div>
  );
}

export default App;