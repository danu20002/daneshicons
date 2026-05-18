import React from 'react';

export const iconData = {
  id: "Forward",
  name: "Forward",
  category: "F",
  nodes: [["path",{"d":"m15 17 5-5-5-5"}],["path",{"d":"M4 18v-2a4 4 0 0 1 4-4h12"}]]
};

export const Forward = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m15 17 5-5-5-5" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
      {children}
    </svg>
  );
});

export default Forward;
