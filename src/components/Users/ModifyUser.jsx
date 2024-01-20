import React, { useState } from 'react';
import SideBAR from '../SideBAR';
import { useNavigate } from 'react-router-dom';
import "./DeleteUser.css"

const ModifyUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: 1, name: 'Ali Ismail' },
    { id: 2, name: 'Muneeb Baig aka (BACKEND)' },
    { id: 3, name: 'Hafiz Awais aka (HAFIZ SUSTI)' },
  ]);

  const handleModification = () => {
    navigate('/Users/Modification')
  };


  return (
    <div>
      <SideBAR>
        <div className='user_h'>
          <h1>User Management</h1>
          <div className='user_Management'>
            <h2>List of Users</h2>
            <ul className='users'>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name}{' '}
                  <button id='del_btn' onClick={handleModification}>Modify</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SideBAR>
    </div>
  );
};

export default ModifyUser;
