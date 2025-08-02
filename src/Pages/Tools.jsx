import React, { useState, useRef } from 'react';
import Modal from '../Components/Modal';
import './Tools.css';
import Tool2 from '../Components/Tool2.jsx';
import stringSimilarity from 'string-similarity';
import Highlighter from 'react-highlight-words';

const Tools = () => {
  const [showTool1Modal, setShowTool1Modal] = useState(false);
  const [xmlText, setXmlText] = useState('');
  const [ids, setIds] = useState('');
  const [workspaceData, setWorkspaceData] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showTool2Modal, setShowTool2Modal] = useState(false);
  const [tool2Inputs, setTool2Inputs] = useState({ input1: '', input2: '' });
  const [tool2Output, setTool2Output] = useState(null);
  
  // Tool 3 state
  const [showTool3Modal, setShowTool3Modal] = useState(false);
  const [tool3Input, setTool3Input] = useState('');
  const [tool3Output, setTool3Output] = useState(null);
  
  const tableRef = useRef(null);
  const xmlTextareaRef = useRef(null);
  const idsTextareaRef = useRef(null);
  const tool2Input1Ref = useRef(null);
  const tool2Input2Ref = useRef(null);
  const tool3InputRef = useRef(null);
  const [showAddToolModal, setShowAddToolModal] = useState(false);
  const [addToolInput1, setAddToolInput1] = useState('');
  const [addToolInput2, setAddToolInput2] = useState('');
  const addToolInput1Ref = useRef(null);
  const addToolInput2Ref = useRef(null);
  const [addToolOutput, setAddToolOutput] = useState(null);
  const [addToolExpanded, setAddToolExpanded] = useState(false);
  // Add a ref to the pre for Input 1
  const input1PreRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState('crimson'); // default to red
  // Instead of a single color per word, use an object: { color: '...', strikethrough: true/false }
  const [wordStates, setWordStates] = useState([]); // array of { color, strikethrough } for each word

  const autoResize = (ref) => {
    if (ref && ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }
  };

  const handleXmlChange = (e) => {
    setXmlText(e.target.value);
    autoResize(xmlTextareaRef);
  };

  const handleIdsChange = (e) => {
    setIds(e.target.value);
    autoResize(idsTextareaRef);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkspaceData({ xml: xmlText, ids });
    setShowTool1Modal(false);
    setXmlText('');
    setIds('');
    // Clear other outputs when Tool 1 is used
    setTool2Output(null);
    setTool3Output(null);
    setAddToolOutput(null);
  };

  const handleTool2InputChange = (e) => {
    setTool2Inputs({ ...tool2Inputs, [e.target.name]: e.target.value });
    if (e.target.name === 'input1') autoResize(tool2Input1Ref);
    if (e.target.name === 'input2') autoResize(tool2Input2Ref);
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
    // Clear other outputs when Tool 2 is used
    setWorkspaceData(null);
    setTool3Output(null);
    setAddToolOutput(null);
  };

  // Tool 3 handlers
  const handleTool3InputChange = (e) => {
    setTool3Input(e.target.value);
    autoResize(tool3InputRef);
  };

  const handleTool3Submit = (e) => {
    e.preventDefault();
    const processedOutput = processTool3Input(tool3Input);
    setTool3Output(processedOutput);
    setShowTool3Modal(false);
    setTool3Input('');
    // Clear other outputs when Tool 3 is used
    setWorkspaceData(null);
    setTool2Output(null);
    setAddToolOutput(null);
  };

  // Tool 3 processing method - customize this based on what you want the tool to do
  /*
     
  */
  
const processTool3Input = (input) => {
    if (!input.trim()) return null;
      
    // this will find the true new line and break it up to sections
    const inputArr = input.split('\n\n');
    
    // Object to store unique assertions with their PLMN paths
    const assertionMap = new Map();
    
    // we want to check if it contains ERROR TEXT and Assertion
    for(let i = 0; i < inputArr.length; i++){
        let block = inputArr[i];
        
        // Check if block contains both "ERROR TEXT" and "Assertion"
        if(block.includes("ERROR TEXT") && block.includes("Assertion")){
            // Extract PLMN path from the first line of the block
            const lines = block.split('\n');
            const firstLine = lines[0].trim();
            
            // Clean the PLMN path by taking everything before the first space
            const plmnPath = firstLine.split(' ')[0];
            
            // Extract assertion number using regex
            const assertionMatch = block.match(/"Assertion":\s*"(\d+)"/);
            
            if(assertionMatch && plmnPath.startsWith('PLMN-PLMN')){
                const assertionNumber = assertionMatch[1];
                
                // If this assertion hasn't been seen before, create a new entry
                if(!assertionMap.has(assertionNumber)){
                    assertionMap.set(assertionNumber, {
                        assertion: assertionNumber,
                        plmnPaths: new Set()
                    });
                }
                
                // Add the PLMN path to this assertion
                assertionMap.get(assertionNumber).plmnPaths.add(plmnPath);
            }
        }
    }
    
    // Convert to output format
    const output = {
        uniqueAssertions: Array.from(assertionMap.values()).map(item => ({
            assertion: item.assertion,
            plmnPaths: Array.from(item.plmnPaths)
        }))
    };
    
    // console.log('Input Array: ', inputArr);
    // console.log('Processed Output: ', output);
    
    return output;
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

  
  const handleAddToolInput1Change = (e) => {
    setAddToolInput1(e.target.value);
    autoResize(addToolInput1Ref);
  };
  const handleAddToolInput2Change = (e) => {
    setAddToolInput2(e.target.value);
    autoResize(addToolInput2Ref);
  };
  const handleAddToolSubmit = (e) => {
    e.preventDefault();
    setAddToolOutput({ input1: addToolInput1, input2: addToolInput2 });
    setShowAddToolModal(false);
    setAddToolInput1('');
    setAddToolInput2('');
    // Clear other outputs when Add Tool is used
    setWorkspaceData(null);
    setTool2Output(null);
    setTool3Output(null);
  };

  // Add a mouseup handler for multi-word selection
  const handleInput1MouseUp = () => {
    if (!input1PreRef.current) return;
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;
    const selectedText = selection.toString();
    if (!selectedText.trim()) return;
    // Find all word indices in the selection
    const words = addToolOutput.input1.split(/(\b\w+\b)/g);
    let selectedIndices = [];
    for (let i = 0; i < words.length; i++) {
      if (/^\w+$/.test(words[i])) {
        if (
          selection.anchorNode &&
          selection.focusNode &&
          selection.anchorNode.parentElement &&
          selection.anchorNode.parentElement.closest('.input1-pre') &&
          selection.focusNode.parentElement &&
          selection.focusNode.parentElement.closest('.input1-pre')
        ) {
          // If the word is in the selected text
          if (
            selection.containsNode(
              input1PreRef.current.childNodes[i],
              true
            )
          ) {
            selectedIndices.push(i);
          }
        } else if (
          selectedText.includes(words[i]) &&
          selectedText.match(new RegExp('\\b' + words[i] + '\\b'))
        ) {
          selectedIndices.push(i);
        }
      }
    }
    if (selectedIndices.length > 0) {
      setWordStates((prev) => {
        const next = [...prev];
        for (const idx of selectedIndices) {
          const current = prev[idx] || { color: 'crimson', strikethrough: false };
          if (selectedColor === 'gray') {
            if (current.color === 'dodgerblue') {
              next[idx] = { ...current, strikethrough: !current.strikethrough };
            }
          } else {
            next[idx] = {
              color: selectedColor,
              strikethrough: selectedColor === 'dodgerblue' ? current.strikethrough : false,
            };
          }
        }
        return next;
      });
    }
    selection.removeAllRanges();
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
          <button className="tool-button" onClick={() => { setShowTool1Modal(true); setShowTool2Modal(false); setShowTool3Modal(false); }}>
            Open Tool
          </button>
        </div>
        
        <div className="tool-card">
          <div className="tool-icon">⚙️</div>
          <h3>Tool 2</h3>
          <p>Clean up typo/dirty keywords</p>
          <button className="tool-button" onClick={() => { setShowTool2Modal(true); setShowTool1Modal(false); setShowTool3Modal(false); }}>
            Open Tool
          </button>
        </div>
        
        <div className="tool-card">
          <div className="tool-icon">📊</div>
          <h3>Tool 3</h3>
          <p>Text Analysis & Statistics</p>
          <button className="tool-button" onClick={() => { setShowTool3Modal(true); setShowTool1Modal(false); setShowTool2Modal(false); }}>
            Open Tool
          </button>
        </div>
        
        <div className="tool-card add-tool">
          <div className="tool-icon">➕</div>
          <h3>Add New Tool</h3>
          <p>Create a new tool</p>
          <button className="tool-button" onClick={() => setShowAddToolModal(true)}>Add Tool</button>
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
          ) : tool3Output ? (
            <div className="tool3-output">
              <div className="workspace-header">Tool 3 Assertion Mapper</div>
              <div className="tool3-results">
                <div className="tool3-stats">
                  <h4>Assertion Dump</h4>
                  <div className="stats-grid">
                    {tool3Output.uniqueAssertions.map((assertionGroup, index) => (
                      <div key={assertionGroup.assertion} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        {/* Assertion Header */}
                        <div className="bg-blue-50 px-4 py-3 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <h4 className="text-md font-medium text-blue-900">
                              Assertion #{assertionGroup.assertion}
                            </h4>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              {assertionGroup.plmnPaths.length} occurrence{assertionGroup.plmnPaths.length !== 1 ? 's' : ''}
                            </span>
                          </div>
                        </div>
                        
                        {/* PLMN Paths Grid */}
                        <div className="p-4">
                          <div className="grid gap-2">
                            {assertionGroup.plmnPaths.map((plmnPath, pathIndex) => (
                              <div 
                                key={pathIndex}
                                className="bg-gray-50 border border-gray-200 rounded p-3 hover:bg-gray-100 transition-colors"
                              >
                                <div className="font-mono text-sm text-gray-800 break-all">
                                  {plmnPath}
                                </div>

                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
               
                
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
          ) : addToolOutput ? (
            <div className="workspace-columns">
              <div className={`workspace-col${addToolExpanded ? ' expanded' : ''}`}> 
                <div className="workspace-header">
                  Input 1
                  <button
                    className="expand-btn"
                    type="button"
                    onClick={() => setAddToolExpanded((prev) => !prev)}
                  >
                    {addToolExpanded ? 'Collapse' : 'Expand'}
                  </button>
                </div>
                <div className="highlight-mode-group">
                  {[
                    { key: 'static', label: 'Static', color: 'crimson' },
                    { key: 'iterator', label: 'Iterator', color: 'dodgerblue' },
                    { key: 'strikethrough', label: 'Strikethrough', color: 'gray' },
                  ].map(({ key, label, color }) => (
                    <label key={key} className={`highlight-mode-btn${selectedColor === color ? ' active' : ''}`}
                      style={{ background: selectedColor === color ? color : '#eee', color: selectedColor === color ? '#fff' : '#333' }}>
                      <input
                        type="radio"
                        name="highlightMode"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                        style={{ display: 'none' }}
                      />
                      {label}
                    </label>
                  ))}
                </div>
                <pre
                  ref={input1PreRef}
                  className="workspace-pre input1-pre"
                  style={{ cursor: 'pointer', userSelect: 'text' }}
                  onMouseUp={handleInput1MouseUp}
                >
                  {addToolOutput.input1.split(/(\b\w+\b)/g).map((part, idx) => {
                    if (/^\w+$/.test(part)) {
                      const state = wordStates[idx] || { color: 'crimson', strikethrough: false };
                      let style = {
                        backgroundColor: state.color,
                        color: state.color === 'crimson' ? '#fff' : '#222',
                        padding: '0 2px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                      };
                      if (state.color === 'dodgerblue' && state.strikethrough) {
                        style.textDecoration = 'line-through';
                        style.textDecorationColor = '#fff';
                        style.textDecorationThickness = '3px';
                      }
                      return (
                        <span
                          key={idx}
                          style={style}
                          onClick={() => setWordStates((prev) => {
                            const next = [...prev];
                            const current = prev[idx] || { color: 'crimson', strikethrough: false };
                            if (selectedColor === 'gray') {
                              if (current.color === 'dodgerblue') {
                                next[idx] = { ...current, strikethrough: !current.strikethrough };
                              }
                            } else {
                              next[idx] = {
                                color: selectedColor,
                                strikethrough: selectedColor === 'dodgerblue' ? current.strikethrough : false,
                              };
                            }
                            return next;
                          })}
                        >
                          {part}
                        </span>
                      );
                    }
                    return part;
                  })}
                </pre>
              </div>
              {!addToolExpanded && (
                <div className="workspace-col">
                  <div className="workspace-header">Input 2</div>
                  <pre className="workspace-pre">{addToolOutput.input2}</pre>
                </div>
              )}
            </div>
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
                required
                ref={xmlTextareaRef}
                onInput={() => autoResize(xmlTextareaRef)}
              />
            </label>
            <label className="tool-modal-label ids">
              List of IDs:
              <textarea
                className="ids"
                value={ids}
                onChange={handleIdsChange}
                placeholder="Paste IDs here, one per line or comma-separated"
                required
                ref={idsTextareaRef}
                onInput={() => autoResize(idsTextareaRef)}
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
                required
                ref={tool2Input1Ref}
                onInput={() => autoResize(tool2Input1Ref)}
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
                required
                ref={tool2Input2Ref}
                onInput={() => autoResize(tool2Input2Ref)}
              />
            </label>
          </div>
          <div className="tool-modal-actions">
            <button type="submit" className="tool-modal-submit">Submit</button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={showTool3Modal} onClose={() => setShowTool3Modal(false)} title="Tool 3 - Text Analysis">
        <form onSubmit={handleTool3Submit} className="tool-modal-form">
          <div className="tool-modal-fields">
            <label className="tool-modal-label xml">
              Text to Analyze:
              <textarea
                className="xml"
                value={tool3Input}
                onChange={handleTool3InputChange}
                placeholder="Enter or paste the text you want to analyze..."
                required
                ref={tool3InputRef}
                onInput={() => autoResize(tool3InputRef)}
              />
            </label>
          </div>
          <div className="tool-modal-actions">
            <button type="submit" className="tool-modal-submit">Analyze Text</button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={showAddToolModal} onClose={() => setShowAddToolModal(false)} title="Add New Tool">
        <form onSubmit={handleAddToolSubmit} className="tool-modal-form">
          <div className="tool-modal-fields">
            <label className="tool-modal-label xml">
              Input 1:
              <textarea
                className="xml"
                value={addToolInput1}
                onChange={handleAddToolInput1Change}
                placeholder="Enter first value"
                required
                ref={addToolInput1Ref}
                onInput={() => autoResize(addToolInput1Ref)}
              />
            </label>
            <label className="tool-modal-label ids">
              Input 2:
              <textarea
                className="ids"
                value={addToolInput2}
                onChange={handleAddToolInput2Change}
                placeholder="Enter second value"
                required
                ref={addToolInput2Ref}
                onInput={() => autoResize(addToolInput2Ref)}
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