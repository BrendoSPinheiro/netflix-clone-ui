import React from 'react';
import './Button.css'

function Button({ href, content, style }){
  return (
    <a 
      href={href} 
      className="button"
      style={{
        backgroundColor: style.backgroundColor,
        color: style.color
      }}
    >
      {content}
    </a>
  );
}

export default Button;