import React from 'react';

export const iconData = {
  id: "BrickWall",
  name: "BrickWall",
  category: "B",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M12 9v6"}],["path",{"d":"M16 15v6"}],["path",{"d":"M16 3v6"}],["path",{"d":"M3 15h18"}],["path",{"d":"M3 9h18"}],["path",{"d":"M8 15v6"}],["path",{"d":"M8 3v6"}]]
};

export const BrickWall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 9v6" />
      <path d="M16 15v6" />
      <path d="M16 3v6" />
      <path d="M3 15h18" />
      <path d="M3 9h18" />
      <path d="M8 15v6" />
      <path d="M8 3v6" />
      {children}
    </svg>
  );
});

export default BrickWall;
