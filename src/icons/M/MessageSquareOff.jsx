import React from 'react';

export const iconData = {
  id: "MessageSquareOff",
  name: "MessageSquareOff",
  category: "M",
  nodes: [["path",{"d":"M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M8.656 3H20a2 2 0 0 1 2 2v11.344"}]]
};

export const MessageSquareOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826" />
      <path d="m2 2 20 20" />
      <path d="M8.656 3H20a2 2 0 0 1 2 2v11.344" />
    </svg>
  );
};

export default MessageSquareOff;
