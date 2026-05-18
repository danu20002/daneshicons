import React from 'react';

export const iconData = {
  id: "MessageSquareLock",
  name: "MessageSquareLock",
  category: "M",
  nodes: [["path",{"d":"M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10"}],["path",{"d":"M20 15v-2a2 2 0 0 0-4 0v2"}],["rect",{"x":"14","y":"15","width":"8","height":"5","rx":"1"}]]
};

export const MessageSquareLock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" />
      <path d="M20 15v-2a2 2 0 0 0-4 0v2" />
      <rect x="14" y="15" width="8" height="5" rx="1" />
      {children}
    </svg>
  );
});

export default MessageSquareLock;
