import React from 'react';

export const iconData = {
  "id": "NanoHigh",
  "name": "NanoHigh",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.09 2.07 L 15.31 9.66 L 21.05 16.17 L 12.37 16.04 L 3.86 17.75 L 8.31 10.30 Z"
      }
    ]
  ]
};

export const NanoHigh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.09 2.07 L 15.31 9.66 L 21.05 16.17 L 12.37 16.04 L 3.86 17.75 L 8.31 10.30 Z" />
      {children}
    </svg>
  );
});

export default NanoHigh;
