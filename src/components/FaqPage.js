// src/components/FaqPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  useEffect(() => {
    // Fetch FAQs
    axios.get('/api/faqs')
      .then((response) => setFaqs(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddFaq = () => {
    axios.post('/api/faqs', newFaq)
      .then((response) => setFaqs([...faqs, response.data]))
      .catch((error) => console.error(error));
  };

  const handleDeleteFaq = (id) => {
    axios.delete(`/api/faqs/${id}`)
      .then(() => setFaqs(faqs.filter((faq) => faq.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="faq-page">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
            <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-faq">
        <input
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
        />
        <button onClick={handleAddFaq}>Add FAQ</button>
      </div>
    </div>
  );
}

export default FaqPage;
