import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [sentences, setSentences] = useState(Array(6).fill(''));
  const [inputs, setInputs] = useState(Array(6).fill(''));
  const [editingIndex, setEditingIndex] = useState(null);

  const addOrUpdateSentence = (index) => {
    if (inputs[index] !== '') {
      const newSentences = [...sentences];
      newSentences[index] = inputs[index];
      setSentences(newSentences);
      clearInput(index);
      setEditingIndex(null);
    }
  };

  const deleteSentence = (index) => {
    const newSentences = [...sentences];
    newSentences[index] = '';
    setSentences(newSentences);
    clearInput(index);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const clearInput = (index) => {
    const newInputs = [...inputs];
    newInputs[index] = '';
    setInputs(newInputs);
  };

  const editSentence = (index) => {
    setEditingIndex(index);
    setInputs([sentences[index]]);
  };

  const titles = [
    '3adad alta7alil almonjazah',
    'al3adad aljomli llta7alil almonjazah',
    '3adad alta7alil alijabiya',
    'al3adad aljomli llta7alil alijabiya',
    'piw piw ahmed',
    '3adad alwafiyet almosara7 bihaa',
  ];

  return (
    <div className="App">
      <h1>Page lkhadema:</h1>
      <div className="container">
        <div className="input-section">
          <h2>lenna t3abi sahbi</h2>
          {inputs.map((input, index) => (
            <div key={index}>
              <label>{titles[index]}</label>
              <input
                type="text"
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
                disabled={editingIndex === index || sentences[index] !== ''}
              />
              {editingIndex === index ? (
                <>
                  <button onClick={() => addOrUpdateSentence(index)}>Update</button>
                  <button onClick={() => setEditingIndex(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {sentences[index] === '' ? (
                    <button onClick={() => addOrUpdateSentence(index)}>Add</button>
                  ) : (
                    <>
                      <button onClick={() => editSentence(index)}>Edit</button>
                      <button onClick={() => deleteSentence(index)}>Delete</button>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <div className="sentence-list">
          <h2>Mr le affichage</h2>
          <ul>
            {sentences.map((sentence, index) => (
              <li key={index}>
                <span>{titles[index]}: </span>
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={inputs[index]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                    <button onClick={() => addOrUpdateSentence(index)}>Update</button>
                  </>
                ) : (
                  <>
                    {sentence}
                    {sentence !== '' && (
                      <>
                        <button onClick={() => editSentence(index)}>Edit</button>
                        <button onClick={() => deleteSentence(index)}>Delete</button>
                      </>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
