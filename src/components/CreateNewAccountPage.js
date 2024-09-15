// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles.css'; // Import the common CSS file

// function LoginPage() {
//   const navigate = useNavigate();

//   // State for input fields
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // Handle login
//   const handleLogin = () => {
//     // Dummy authentication logic (you can replace this with real logic)
//     if (username === 'user' && password === 'password') {
//       navigate('/home');
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login Page</h1>
//       <div className="login-form">
//         <label htmlFor="username">Username:</label>
//         <input
//           id="username"
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="login-input"
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="login-input"
//         />
//         <button onClick={handleLogin} className="login-button">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;




















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the common CSS file

function CreateNewAccountPage() {
  const navigate = useNavigate();

  // State for input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Handle login
  const handleLogin = () => {
    // Dummy authentication logic (you can replace this with real logic)
    if (username !== '' && password !== '') {
      navigate('/');
    } else {
      alert('Enter valid username or password');
    }
  };

//   // Handle forgot password
//   const handleForgotPassword = () => {
//     alert('Redirecting to forgot password page...');
//     // Logic to redirect to forgot password page can go here
//   };

  return (
    <div className="login-container">
      <h1>Create New Account</h1>
      <div className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Create Account
        </button>


        
        {/* <div className="remember-me">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>




        <p className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </p> */}

        



      </div>
    </div>
  );
}

export default CreateNewAccountPage;
