import React from 'react';

export const iconData = {
  id: "Tablets",
  name: "Tablets",
  category: "T",
  nodes: [["circle",{"cx":"7","cy":"7","r":"5"}],["circle",{"cx":"17","cy":"17","r":"5"}],["path",{"d":"M12 17h10"}],["path",{"d":"m3.46 10.54 7.08-7.08"}]]
};

export const Tablets = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="7" cy="7" r="5" />
      <circle cx="17" cy="17" r="5" />
      <path d="M12 17h10" />
      <path d="m3.46 10.54 7.08-7.08" />
    </svg>
  );
};

export default Tablets;
