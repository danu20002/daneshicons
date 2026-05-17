import React from 'react';

export const iconData = {
  id: "MessageSquareQuote",
  name: "MessageSquareQuote",
  category: "M",
  nodes: [["path",{"d":"M14 14a2 2 0 0 0 2-2V8h-2"}],["path",{"d":"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{"d":"M8 14a2 2 0 0 0 2-2V8H8"}]]
};

export const MessageSquareQuote = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M14 14a2 2 0 0 0 2-2V8h-2" />
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M8 14a2 2 0 0 0 2-2V8H8" />
    </svg>
  );
};

export default MessageSquareQuote;
