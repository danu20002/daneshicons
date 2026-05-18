import React from 'react';

export const iconData = {
  id: "FishSymbol",
  name: "FishSymbol",
  category: "F",
  nodes: [["path",{"d":"M2 16s9-15 20-4C11 23 2 8 2 8"}]]
};

export const FishSymbol = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
      {children}
    </svg>
  );
});

export default FishSymbol;
