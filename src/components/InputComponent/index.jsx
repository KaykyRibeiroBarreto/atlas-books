import React from 'react'
import { Search } from 'lucide-react';

const InputComponent  = ({ placeholder, value, onChange, ...props }) => {
  return (
    <div className="input-wrapper" style={styles.wrapper}>
      <Search style={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles.input}
        {...props}
      />
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '8px 12px',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '400px',
  },
  icon: {
    marginRight: '8px',
    color: '#888',
  },
  input: {
    border: 'none',
    outline: 'none',
    flex: 1,
    fontSize: '16px',
  },
};
export default InputComponent;
