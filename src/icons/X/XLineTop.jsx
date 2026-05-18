import React from 'react';

export const iconData = {
  id: "XLineTop",
  name: "XLineTop",
  category: "X",
  nodes: [["path",{"d":"M18 4H6"}],["path",{"d":"M18 8 6 20"}],["path",{"d":"m6 8 12 12"}]]
};

export const XLineTop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M18 4H6" />
      <path d="M18 8 6 20" />
      <path d="m6 8 12 12" />
      {children}
    </svg>
  );
});

export default XLineTop;
