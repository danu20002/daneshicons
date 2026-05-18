import React from 'react';

export const iconData = {
  id: "MoveLeft",
  name: "MoveLeft",
  category: "M",
  nodes: [["path",{"d":"M6 8L2 12L6 16"}],["path",{"d":"M2 12H22"}]]
};

export const MoveLeft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M6 8L2 12L6 16" />
      <path d="M2 12H22" />
      {children}
    </svg>
  );
});

export default MoveLeft;
