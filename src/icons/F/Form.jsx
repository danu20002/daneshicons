import React from 'react';

export const iconData = {
  id: "Form",
  name: "Form",
  category: "F",
  nodes: [["path",{"d":"M4 14h6"}],["path",{"d":"M4 2h10"}],["rect",{"x":"4","y":"18","width":"16","height":"4","rx":"1"}],["rect",{"x":"4","y":"6","width":"16","height":"4","rx":"1"}]]
};

export const Form = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 14h6" />
      <path d="M4 2h10" />
      <rect x="4" y="18" width="16" height="4" rx="1" />
      <rect x="4" y="6" width="16" height="4" rx="1" />
    </svg>
  );
};

export default Form;
