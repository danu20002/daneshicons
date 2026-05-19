import React from 'react';

export const iconData = {
  "id": "VitaleWise",
  "name": "VitaleWise",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.12 3.80 A 2.80 4.31 146 0 1 2.43 2.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.85 6.73 C 13.05 12.48, 2.79 3.67, 6.30 15.00"
      }
    ]
  ]
};

export const VitaleWise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.12 3.80 A 2.80 4.31 146 0 1 2.43 2.40" />
      <path d="M 8.85 6.73 C 13.05 12.48, 2.79 3.67, 6.30 15.00" />
      {children}
    </svg>
  );
});

export default VitaleWise;
