import React from 'react';

export const iconData = {
  id: "MoveRight",
  name: "MoveRight",
  category: "M",
  nodes: [["path",{"d":"M18 8L22 12L18 16"}],["path",{"d":"M2 12H22"}]]
};

export const MoveRight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
      {children}
    </svg>
  );
});

export default MoveRight;
