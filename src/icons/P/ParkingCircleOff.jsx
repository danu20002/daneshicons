import React from 'react';

export const iconData = {
  id: "ParkingCircleOff",
  name: "ParkingCircleOff",
  category: "P",
  nodes: [["path",{"d":"M12.656 7H13a3 3 0 0 1 2.984 3.307"}],["path",{"d":"M13 13H9"}],["path",{"d":"M19.071 19.071A1 1 0 0 1 4.93 4.93"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M8.357 2.687a10 10 0 0 1 12.956 12.956"}],["path",{"d":"M9 17V9"}]]
};

export const ParkingCircleOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" />
      <path d="M13 13H9" />
      <path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" />
      <path d="m2 2 20 20" />
      <path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" />
      <path d="M9 17V9" />
    </svg>
  );
};

export default ParkingCircleOff;
