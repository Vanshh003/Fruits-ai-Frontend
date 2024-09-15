// // src/components/ChatbotPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ChatbotPage() {
//   const [fruits, setFruits] = useState([]);
//   const [selectedFruit, setSelectedFruit] = useState(null);

//   useEffect(() => {
//     // Fetch fruit data
//     axios.get('/api/fruits')  // Replace with your real API
//       .then((response) => {
//         setFruits(response.data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="chatbot-page">
//       <h1>Chatbot - Fruits List</h1>
//       <div className="fruits-list">
//         {fruits.map((fruit) => (
//           <div key={fruit.id} onClick={() => setSelectedFruit(fruit)}>
//             <h2>{fruit.name}</h2>
//           </div>
//         ))}
//       </div>
//       {selectedFruit && (
//         <div className="fruit-details">
//           <h2>{selectedFruit.name}</h2>
//           <p>{selectedFruit.details}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ChatbotPage;























import React, { useState } from 'react';
import '../styles.css'; // Import the correct CSS file

function ChatbotPage() {
    const [messages, setMessages] = useState([
        { text: 'Hi! How can I assist you today?', type: 'bot' },
        { text: 'I want to know about fruits.', type: 'user' },
        { text: 'Sure! What would you like to know about fruits?', type: 'bot' },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, type: 'user' }]);
            setInput('');
            // Simulate a bot response
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'That sounds interesting! Let me tell you more about fruits.', type: 'bot' }
                ]);
            }, 1000);
        }
    };

    return (
        <div className="chatbot-page">
            <h1>Chatbot</h1>
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatbotPage;
