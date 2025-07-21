import React, { useState } from 'react';

// Tool2 component receives a callback to send output to parent
const Tool2 = ({ onRunQuery }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  // This function will be called when the button is clicked
  const runQuery = () => {
    
    // Example logic: concatenate inputs (customize as needed)
    const output = `Input Keywords: ${input1}\nFixed Keywords: ${input2}`;
    if (onRunQuery) onRunQuery({ input1, input2, output });
  };

  return (
    <div className="tool2-container">
      <div className="tool2-fields">
        <textarea
          className="tool2-input"
          value={input1}
          onChange={e => setInput1(e.target.value)}
          placeholder="Enter first value"
          rows={10}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <textarea
          className="tool2-input"
          value={input2}
          onChange={e => setInput2(e.target.value)}
          placeholder="Enter second value"
          rows={10}
          style={{ width: '100%' }}
        />
      </div>
      <div className="tool2-actions" style={{ marginTop: '1rem' }}>
        <button type="button" className="tool2-run-btn" onClick={runQuery}>
          Run Query
        </button>
      </div>
    </div>
  );
};

export default Tool2; 