// src/components/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (login(password)) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid password',
        confirmButtonColor: '#3B82F6'
      });
    }
    setPassword('');
  };

  return (
    <div className="fixed bottom-4 right-4">
      <form onSubmit={handleLogin} className="flex gap-2">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin Password"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;