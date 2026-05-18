import React from 'react';

export const iconData = {
  id: "MoveUpLeft",
  name: "MoveUpLeft",
  category: "M",
  nodes: [["path",{"d":"M5 11V5H11"}],["path",{"d":"M5 5L19 19"}]]
};

export const MoveUpLeft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M5 11V5H11" />
      <path d="M5 5L19 19" />
      {children}
    </svg>
  );
});

export default MoveUpLeft;
