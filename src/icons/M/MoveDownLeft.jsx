import React from 'react';

export const iconData = {
  id: "MoveDownLeft",
  name: "MoveDownLeft",
  category: "M",
  nodes: [["path",{"d":"M11 19H5V13"}],["path",{"d":"M19 5L5 19"}]]
};

export const MoveDownLeft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M11 19H5V13" />
      <path d="M19 5L5 19" />
      {children}
    </svg>
  );
});

export default MoveDownLeft;
