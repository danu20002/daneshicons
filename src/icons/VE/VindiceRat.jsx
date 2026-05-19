import React from 'react';

export const iconData = {
  "id": "VindiceRat",
  "name": "VindiceRat",
  "category": "VE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 12.00 a 2.22 2.22 0 1 0 4.45 0 a 2.22 2.22 0 1 0 -4.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 12.00 a 6.04 6.04 0 1 0 12.07 0 a 6.04 6.04 0 1 0 -12.07 0"
      }
    ]
  ]
};

export const VindiceRat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 12.00 a 2.22 2.22 0 1 0 4.45 0 a 2.22 2.22 0 1 0 -4.45 0" />
      <path d="M 5.96 12.00 a 6.04 6.04 0 1 0 12.07 0 a 6.04 6.04 0 1 0 -12.07 0" />
      {children}
    </svg>
  );
});

export default VindiceRat;
