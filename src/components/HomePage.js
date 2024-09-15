// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function HomePage() {
//   const navigate = useNavigate();

//   const handleChatbotClick = () => {
//     navigate('/chatbot');
//   };

//   const handleTranslatorClick = () => {
//     navigate('/translator');
//   };

//   const handleFaqClick = () => {
//     navigate('/faq');
//   };

//   const handleAboutClick = () => {
//     navigate('/about');
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={handleChatbotClick}>Go to Chatbot</button>
//       <button onClick={handleTranslatorClick}>Go to Translator</button>
//       <button onClick={handleFaqClick}>Go to FAQ</button>
//       <button onClick={handleAboutClick}>Go to About</button>
//     </div>
//   );
// }

// export default HomePage;





import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import the common CSS file

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Fruit.ai</h1>
      <div className="home-buttons">
        <Link to="/chatbot" className="home-button">Chatbot</Link>
        <Link to="/translator" className="home-button">Translator</Link>
        <Link to="/faq" className="home-button">FAQ</Link>
        <Link to="/about" className="home-button">About</Link>
      </div>
    </div>
  );
}

export default HomePage;
