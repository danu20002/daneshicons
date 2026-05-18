import React from 'react';

export const iconData = {
  id: "ToyBrick",
  name: "ToyBrick",
  category: "T",
  nodes: [["rect",{"width":"18","height":"12","x":"3","y":"8","rx":"1"}],["path",{"d":"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{"d":"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]]
};

export const ToyBrick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="18" height="12" x="3" y="8" rx="1" />
      <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
      <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
      {children}
    </svg>
  );
});

export default ToyBrick;
