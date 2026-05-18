import React from 'react';

export const iconData = {
  id: "MoveDownRight",
  name: "MoveDownRight",
  category: "M",
  nodes: [["path",{"d":"M19 13V19H13"}],["path",{"d":"M5 5L19 19"}]]
};

export const MoveDownRight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M19 13V19H13" />
      <path d="M5 5L19 19" />
      {children}
    </svg>
  );
});

export default MoveDownRight;
