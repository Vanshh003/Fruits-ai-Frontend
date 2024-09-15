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
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the common CSS file

function LoginPage() {
  const navigate = useNavigate();

  // State for input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Handle login
  const handleLogin = () => {
    // Dummy authentication logic (you can replace this with real logic)
    if (username === 'user' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    alert('Redirecting to forgot password page...');
    // Logic to redirect to forgot password page can go here
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
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
          Login
        </button>


        <div className="login-options">

            <div className="remember-me">
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
            </p>

        </div>
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

        <div className="create-account">
            <p>Don't have an account? <a href="/register">Create a new account</a></p>
        </div>
    

      </div>
    
    
        {/* <div className="social-login">
            <p>Or connect with:</p>
            <div className="social-icons">
                <a href="#" className="social-icon google">Google</a>
                <a href="#" className="social-icon facebook">Facebook</a>
                <a href="#" className="social-icon twitter">Twitter</a>
                <a href="#" className="social-icon instagram">Instagram</a>
            </div>
        </div> */}

        {/* Social Media Icons */}
        <div className="social-login">
            <p>Or connect with</p>
            <div className="social-icons">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;
