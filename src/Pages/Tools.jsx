import React, { useState } from 'react';
import Modal from '../Components/Modal';
import './Tools.css';

const Tools = () => {
  const [showTool1Modal, setShowTool1Modal] = useState(false);
  const [xmlText, setXmlText] = useState('');
  const [ids, setIds] = useState('');
  const [workspaceData, setWorkspaceData] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

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
    return (
      <div className="finalized-output">
        <div className="finalized-header">
          Finalized Output
          <button className="finalized-copy-btn" onClick={handleCopy} type="button">
            {copySuccess ? 'Copied!' : 'Copy'}
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
          <button className="tool-button" onClick={() => setShowTool1Modal(true)}>
            Open Tool
          </button>
        </div>
        {/*
        <div className="tool-card">
          <div className="tool-icon">⚙️</div>
          <h3>Tool 2</h3>
          <p>Description of tool 2</p>
          <button className="tool-button">Open Tool</button>
        </div>
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
          {workspaceData ? (
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
    </div>
  );
};

export default Tools; 