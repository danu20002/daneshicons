import React from 'react';

export const iconData = {
  id: "GlobeX",
  name: "GlobeX",
  category: "G",
  nodes: [["path",{"d":"m16 3 5 5"}],["path",{"d":"M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10"}],["path",{"d":"m21 3-5 5"}]]
};

export const GlobeX = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m16 3 5 5" />
      <path d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" />
      <path d="m21 3-5 5" />
      {children}
    </svg>
  );
});

export default GlobeX;
