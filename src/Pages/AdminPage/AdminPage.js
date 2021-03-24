import { useState } from 'react';


const Admin = () => {

  const userHeader =  [ 'id', 'active', 'name', 'email', 'address', 'phone', 'roles', 'type', 'boton'];
  const [headers, setHeaders] = useState({});
  console.log(headers);

  const getUsers = () => {
    const token = localStorage.getItem('UserToken');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    fetch(`http://localhost:8000/users`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then( res => {
        setHeaders(res);
      })
      .catch( e => console.log(e))
  }

  return (
    <div>
      <div>
        <ul className='list-navbar'>
          <li>
            <a className='list-admin-element' onClick={getUsers}>
              Usuarios
            </a>
          </li>
          <li>
            <a className='list-admin-element'>
              Anuncios
            </a>
          </li>
        </ul>
      </div>
      <div className='table-container'>
        <table className='admin-table'>
          <thead>
            <tr>
              {
                userHeader.map(header => {
                  return  <th key={header}>{header}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin;
