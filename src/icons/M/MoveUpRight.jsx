import React from 'react';

export const iconData = {
  id: "MoveUpRight",
  name: "MoveUpRight",
  category: "M",
  nodes: [["path",{"d":"M13 5H19V11"}],["path",{"d":"M19 5L5 19"}]]
};

export const MoveUpRight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M13 5H19V11" />
      <path d="M19 5L5 19" />
      {children}
    </svg>
  );
});

export default MoveUpRight;
