import React from 'react';

export const iconData = {
  "id": "VolturaStructure",
  "name": "VolturaStructure",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.69 10.85 C 18.27 6.24, 11.65 11.80, 20.50 3.36"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 17.08 L 16.57 12.06"
      }
    ]
  ]
};

export const VolturaStructure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.69 10.85 C 18.27 6.24, 11.65 11.80, 20.50 3.36" />
      <path d="M 5.44 17.08 L 16.57 12.06" />
      {children}
    </svg>
  );
});

export default VolturaStructure;
