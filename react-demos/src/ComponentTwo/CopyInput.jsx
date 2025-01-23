import React, {useState} from 'react'
import PopUpContent from './PopUpContent';

const CopyInput = () => {
    const [inputvalue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(inputvalue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 5000);
        });
    }
  return (
    <div>
        <input type="text" value={inputvalue} placeholder='Enter value' onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleCopy}>Copy</button>
        <PopUpContent copied={copied}/>
    </div>
  );
};

export default CopyInput