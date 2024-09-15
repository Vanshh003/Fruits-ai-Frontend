

import React, { useState } from 'react';
import axios from 'axios';

function TranslatorPage() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('es'); // Default language set to Spanish (es)

  const languages = [
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'hi', name: 'Hindi' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ru', name: 'Russian' },
    // Add more languages as needed
  ];

  const handleTranslate = () => {
    axios.post('/api/translate', { text, language: selectedLanguage })  // Include the selected language in the request
      .then((response) => {
        setTranslation(response.data.translatedText);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="translator-page">
      <h1>Translator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      
      {/* Dropdown for selecting language */}
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      <button onClick={handleTranslate}>Translate</button>

      <div>
        <h2>Translation</h2>
        <p>{translation}</p>
      </div>
    </div>
  );
}

export default TranslatorPage;
