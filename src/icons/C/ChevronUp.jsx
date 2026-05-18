import React from 'react';

export const iconData = {
  id: "ChevronUp",
  name: "ChevronUp",
  category: "C",
  nodes: [["path",{"d":"m18 15-6-6-6 6"}]]
};

export const ChevronUp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m18 15-6-6-6 6" />
      {children}
    </svg>
  );
});

export default ChevronUp;
