import React, { useState } from 'react';
import SideBAR from '../SideBAR';
import "./DeleteUser.css"

const DeleteUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ali Ismail' },
    { id: 2, name: 'Muneeb Baig aka (BACKEND)' },
    { id: 3, name: 'Hafiz Awais aka (HAFIZ SUSTI)' },
  ]);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
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
                  <label>
                    <button id='del_btn' className='button' onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SideBAR>
    </div>
  );
};

export default DeleteUser;
