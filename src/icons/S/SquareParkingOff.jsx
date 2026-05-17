import React from 'react';

export const iconData = {
  id: "SquareParkingOff",
  name: "SquareParkingOff",
  category: "S",
  nodes: [["path",{"d":"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{"d":"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{"d":"M9 17v-2.3"}]]
};

export const SquareParkingOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" />
      <path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" />
      <path d="m2 2 20 20" />
      <path d="M13 13a3 3 0 1 0 0-6H9v2" />
      <path d="M9 17v-2.3" />
    </svg>
  );
};

export default SquareParkingOff;
