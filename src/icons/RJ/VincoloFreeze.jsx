import React from 'react';

export const iconData = {
  "id": "VincoloFreeze",
  "name": "VincoloFreeze",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.50 15.30 L 4.74 8.19 L 10.45 3.95 L 17.33 5.77 L 20.19 12.28 L 16.89 18.58 L 9.90 19.92 Z"
      }
    ]
  ]
};

export const VincoloFreeze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.50 15.30 L 4.74 8.19 L 10.45 3.95 L 17.33 5.77 L 20.19 12.28 L 16.89 18.58 L 9.90 19.92 Z" />
      {children}
    </svg>
  );
});

export default VincoloFreeze;
