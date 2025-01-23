import {createPortal} from 'react-dom'
import React from 'react';

const PopUpContent = ({copied}) => {
  return createPortal(
    <section style={{position: 'absolute', bottom: '3rems', color: 'red'}}>
        {copied && (
            <div>Copied to clipboard</div>
        )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default PopUpContent