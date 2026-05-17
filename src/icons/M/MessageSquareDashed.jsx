import React from 'react';

export const iconData = {
  id: "MessageSquareDashed",
  name: "MessageSquareDashed",
  category: "M",
  nodes: [["path",{"d":"M14 3h2"}],["path",{"d":"M16 19h-2"}],["path",{"d":"M2 12v-2"}],["path",{"d":"M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149"}],["path",{"d":"M20 19a2 2 0 0 0 2-2v-1"}],["path",{"d":"M22 10v2"}],["path",{"d":"M22 6V5a2 2 0 0 0-2-2"}],["path",{"d":"M4 3a2 2 0 0 0-2 2v1"}],["path",{"d":"M8 19h2"}],["path",{"d":"M8 3h2"}]]
};

export const MessageSquareDashed = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M14 3h2" />
      <path d="M16 19h-2" />
      <path d="M2 12v-2" />
      <path d="M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149" />
      <path d="M20 19a2 2 0 0 0 2-2v-1" />
      <path d="M22 10v2" />
      <path d="M22 6V5a2 2 0 0 0-2-2" />
      <path d="M4 3a2 2 0 0 0-2 2v1" />
      <path d="M8 19h2" />
      <path d="M8 3h2" />
    </svg>
  );
};

export default MessageSquareDashed;
