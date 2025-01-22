import React from 'react'

const PopUpContent = ({copied}) => {
  return (
    <section style={{position: 'absolute', bottom: '3rems', color: 'red'}}>
        {copied && (
            <div>Copied to clipboard</div>
        )}
    </section>
  );
};

export default PopUpContent