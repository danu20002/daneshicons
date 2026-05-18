import React from 'react';

export const iconData = {
  id: "SendToBack",
  name: "SendToBack",
  category: "S",
  nodes: [["rect",{"x":"14","y":"14","width":"8","height":"8","rx":"2"}],["rect",{"x":"2","y":"2","width":"8","height":"8","rx":"2"}],["path",{"d":"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{"d":"M14 7h1a2 2 0 0 1 2 2v1"}]]
};

export const SendToBack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect x="14" y="14" width="8" height="8" rx="2" />
      <rect x="2" y="2" width="8" height="8" rx="2" />
      <path d="M7 14v1a2 2 0 0 0 2 2h1" />
      <path d="M14 7h1a2 2 0 0 1 2 2v1" />
      {children}
    </svg>
  );
});

export default SendToBack;
