import React from 'react';

export const iconData = {
  id: "MessageSquareDiff",
  name: "MessageSquareDiff",
  category: "M",
  nodes: [["path",{"d":"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{"d":"M10 15h4"}],["path",{"d":"M10 9h4"}],["path",{"d":"M12 7v4"}]]
};

export const MessageSquareDiff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M10 15h4" />
      <path d="M10 9h4" />
      <path d="M12 7v4" />
    </svg>
  );
};

export default MessageSquareDiff;
