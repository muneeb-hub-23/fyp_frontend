import React, { useState } from 'react';
import './ToggleSwitch.css'; // You can create a separate CSS file for styling

const ToggleSwitch = ({ initialValue, onChange }) => {
  const [isChecked, setChecked] = useState(initialValue);

  const handleToggle = () => {
    const newValue = !isChecked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
