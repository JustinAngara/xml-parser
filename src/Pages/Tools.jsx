import React, { useState, useRef } from 'react';
import Modal from '../Components/Modal';
import './Tools.css';
import Tool2 from '../Components/Tool2.jsx';
import stringSimilarity from 'string-similarity';

const Tools = () => {
  const [showTool1Modal, setShowTool1Modal] = useState(false);
  const [xmlText, setXmlText] = useState('');
  const [ids, setIds] = useState('');
  const [workspaceData, setWorkspaceData] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showTool2Modal, setShowTool2Modal] = useState(false);
  const [tool2Inputs, setTool2Inputs] = useState({ input1: '', input2: '' });
  const [tool2Output, setTool2Output] = useState(null);
  const tableRef = useRef(null);

  const handleXmlChange = (e) => {
    setXmlText(e.target.value);
  };

  const handleIdsChange = (e) => {
    setIds(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkspaceData({ xml: xmlText, ids });
    setShowTool1Modal(false);
    setXmlText('');
    setIds('');
  };

  const handleTool2InputChange = (e) => {
    setTool2Inputs({ ...tool2Inputs, [e.target.name]: e.target.value });
  };

  const handleTool2Submit = (e) => {
    e.preventDefault();
    const rawKeywords = tool2Inputs.input1.split(/,|\n|;/).map(s => s.trim()).filter(Boolean);
    const cleanedKeywords = tool2Inputs.input2.split(/,|\n|;/).map(s => s.trim()).filter(Boolean);
    const getClosest = (word, options) => {
      const { bestMatch } = stringSimilarity.findBestMatch(word, options);
      return bestMatch.target;
    };
    const mapping = rawKeywords.map(raw => {
      const closest = getClosest(raw, cleanedKeywords);
      return { raw, closest };
    });
    setTool2Output({ mapping });
    setShowTool2Modal(false);
    setTool2Inputs({ input1: '', input2: '' });
  };

  const handleSelectAllOutput = () => {
    if (tableRef.current) {
      const range = document.createRange();
      range.selectNodeContents(tableRef.current);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  // Finalized output: for each ID, replace {id} in the template and join results
  const getFinalizedOutput = (xml, ids) => {
    if (!xml && !ids) return null;
    // Parse IDs: split by comma, newline, or whitespace, filter out empty
    const idList = ids
      .split(/\s|,|;/)
      .map(s => s.trim())
      .filter(Boolean);
    if (!xml.includes('{id}') || idList.length === 0) {
      return (
        <div className="finalized-output">
          <div className="finalized-header">Finalized Output</div>
          <pre className="finalized-pre" style={{color: 'crimson'}}>Please include <code>{'{id}'}</code> in your XML template and provide at least one ID.</pre>
        </div>
      );
    }
    const result = idList.map(id => xml.replaceAll('{id}', id)).join('\n\n');
    const handleCopy = () => {
      navigator.clipboard.writeText(result);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1200);
    };
    const handleCopyPython = () => {
      const pythonScript =
        `ids = [\n    ${idList.map(id => `'${id}'`).join(', ')}\n]\n\ntemplate = '''\n${xml.replace(/'''/g, "''' + " + "'''" + "'''")}\n'''
\nfor id_value in ids:\n    print(template.replace('{id}', str(id_value)))\n`;
      navigator.clipboard.writeText(pythonScript);
    };
    return (
      <div className="finalized-output">
        <div className="finalized-header">
          Finalized Output
          <button className="finalized-copy-btn" onClick={handleCopy} type="button">
            {copySuccess ? 'Copied!' : 'Copy'}
          </button>
          <button className="finalized-python-btn" onClick={handleCopyPython} type="button">
            Copy Python
          </button>
        </div>
        <pre className="finalized-pre">{result}</pre>
      </div>
    );
  };

  return (
    <div className="tools-page">
      <div className="tools-header">
        <h1>Tools</h1>
        <p>Select a tool from the sidebar or add new tools here</p>
      </div>
      
      <div className="tools-grid">
        <div className="tool-card">
          <div className="tool-icon">🔧</div>
          <h3>Tool 1</h3>
          <p>Standard XML/ID Iterator Tool</p>
          <button className="tool-button" onClick={() => { setShowTool1Modal(true); setShowTool2Modal(false); }}>
            Open Tool
          </button>
        </div>
        
        <div className="tool-card">
          <div className="tool-icon">⚙️</div>
          <h3>Tool 2</h3>
          <p>Clean up typo/dirty keywords</p>
          <button className="tool-button" onClick={() => { setShowTool2Modal(true); setShowTool1Modal(false); }}>
            Open Tool
          </button>
        </div>
        {/*
        <div className="tool-card">
          <div className="tool-icon">🛠️</div>
          <h3>Tool 3</h3>
          <p>Description of tool 3</p>
          <button className="tool-button">Open Tool</button>
        </div>
        */}
        <div className="tool-card add-tool">
          <div className="tool-icon">➕</div>
          <h3>Add New Tool</h3>
          <p>Create a new tool</p>
          <button className="tool-button">Add Tool</button>
        </div>
      </div>
      
      <div className="tools-workspace">
        <h2>Tools Workspace</h2>
        <div className="workspace-area">
          {tool2Output ? (
            <div className="tool2-output">
              <div className="workspace-header">Tool 2 Output</div>
              <button className="select-all-btn" onClick={handleSelectAllOutput} type="button">Select All</button>
              <div className="tool2-table-wrapper">
                <table className="tool2-table" ref={tableRef}>
                  <thead>
                    <tr><th>Input</th><th>Output</th></tr>
                  </thead>
                  <tbody>
                    {tool2Output.mapping.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.raw}</td>
                        <td>{row.closest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : workspaceData ? (
            <>
              <div className="workspace-columns">
                <div className="workspace-col">
                  <div className="workspace-header">XML Content</div>
                  <pre className="workspace-pre">{workspaceData.xml}</pre>
                </div>
                <div className="workspace-col">
                  <div className="workspace-header">IDs</div>
                  <pre className="workspace-pre">{workspaceData.ids}</pre>
                </div>
              </div>
              {getFinalizedOutput(workspaceData.xml, workspaceData.ids)}
            </>
          ) : (
            <>
              <p>Open space for tools to be displayed here</p>
              <p>Tools will appear in this area when selected</p>
            </>
          )}
        </div>
      </div>

      <Modal isOpen={showTool1Modal} onClose={() => setShowTool1Modal(false)} title="Tool 1 Input">
        <form onSubmit={handleSubmit} className="tool-modal-form">
          <div className="tool-modal-fields">
            <label className="tool-modal-label xml">
              XML Content:
              <textarea
                className="xml"
                value={xmlText}
                onChange={handleXmlChange}
                placeholder="Paste your XML here"
                rows={10}
                required
              />
            </label>
            <label className="tool-modal-label ids">
              List of IDs:
              <textarea
                className="ids"
                value={ids}
                onChange={handleIdsChange}
                placeholder="Paste IDs here, one per line or comma-separated"
                rows={10}
                required
              />
            </label>
          </div>
          <div className="tool-modal-actions">
            <button type="submit" className="tool-modal-submit">Submit</button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={showTool2Modal} onClose={() => setShowTool2Modal(false)} title="Tool 2 Input">
        <form onSubmit={handleTool2Submit} className="tool-modal-form">
          <div className="tool-modal-fields">
            <label className="tool-modal-label xml">
              Input Keywords:
              <textarea
                name="input1"
                className="xml"
                value={tool2Inputs.input1}
                onChange={handleTool2InputChange}
                placeholder="Enter first value"
                rows={10}
                required
              />
            </label>
            <label className="tool-modal-label ids">
              Fixed Keywords:
              <textarea
                name="input2"
                className="ids"
                value={tool2Inputs.input2}
                onChange={handleTool2InputChange}
                placeholder="Enter second value"
                rows={10}
                required
              />
            </label>
          </div>
          <div className="tool-modal-actions">
            <button type="submit" className="tool-modal-submit">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Tools; 