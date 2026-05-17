import React from 'react';

export const iconData = {
  id: "MessageCirclePlus",
  name: "MessageCirclePlus",
  category: "M",
  nodes: [["path",{"d":"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{"d":"M8 12h8"}],["path",{"d":"M12 8v8"}]]
};

export const MessageCirclePlus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
};

export default MessageCirclePlus;
