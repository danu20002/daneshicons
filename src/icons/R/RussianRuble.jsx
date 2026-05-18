import React from 'react';

export const iconData = {
  id: "RussianRuble",
  name: "RussianRuble",
  category: "R",
  nodes: [["path",{"d":"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{"d":"M6 15h8"}]]
};

export const RussianRuble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M6 11h8a4 4 0 0 0 0-8H9v18" />
      <path d="M6 15h8" />
      {children}
    </svg>
  );
});

export default RussianRuble;
