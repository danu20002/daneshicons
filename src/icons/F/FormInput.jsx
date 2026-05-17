import React from 'react';

export const iconData = {
  id: "FormInput",
  name: "FormInput",
  category: "F",
  nodes: [["rect",{"width":"20","height":"12","x":"2","y":"6","rx":"2"}],["path",{"d":"M12 12h.01"}],["path",{"d":"M17 12h.01"}],["path",{"d":"M7 12h.01"}]]
};

export const FormInput = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <path d="M12 12h.01" />
      <path d="M17 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  );
};

export default FormInput;
