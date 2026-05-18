import React from 'react';

export const iconData = {
  id: "ChevronUpCircle",
  name: "ChevronUpCircle",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m8 14 4-4 4 4"}]]
};

export const ChevronUpCircle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m8 14 4-4 4 4" />
      {children}
    </svg>
  );
});

export default ChevronUpCircle;
