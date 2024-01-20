import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import SideBAR from '../SideBAR';
import './DeleteUser.css';;

const PermissionList = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(true);
  const [selectedPermissions, setSelectedPermissions] = useState({});

  const permissions = ['Mark Attendance', 'View Attendance', 'Modify Attendance', 'Add Student', 'Modify Student', 'Delete Student', 'Add User', 'Modify User', 'Delete  User'];

  const handleToggleChange = (permission) => {
    setSelectedPermissions((prevSelected) => ({
      ...prevSelected,
      [permission]: !prevSelected[permission],
    }));
  };

  const toggleOptionsVisibility = () => {
    setOptionsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div>
      <SideBAR>
      <div className='main_container'>
        <h2 onClick={toggleOptionsVisibility}>User Permissions</h2>
        {isOptionsVisible && (
          <ul className='permission_list'>
            {permissions.map((permission) => (
              <li key={permission} className="permission-option">
              {permission}                
              <label>
                  <ToggleSwitch
                    initialValue={false}
                    onChange={() => handleToggleChange(permission)}
                  />
                </label>
              </li>
            ))}
          </ul>
        )}
        </div>
      </SideBAR>
    </div>
  );
};

export default PermissionList;
