import React from 'react';

export const iconData = {
  "id": "StochoGive",
  "name": "StochoGive",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.36 5.52 L 19.64 5.52 L 19.64 18.48 L 4.36 18.48 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 5.52 L 8.64 1.24 L 23.91 1.24 L 19.64 5.52"
      }
    ],
    [
      "path",
      {
        "d": "M 19.64 5.52 L 23.91 1.24 L 23.91 14.21 L 19.64 18.48"
      }
    ]
  ]
};

export const StochoGive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.36 5.52 L 19.64 5.52 L 19.64 18.48 L 4.36 18.48 Z" />
      <path d="M 4.36 5.52 L 8.64 1.24 L 23.91 1.24 L 19.64 5.52" />
      <path d="M 19.64 5.52 L 23.91 1.24 L 23.91 14.21 L 19.64 18.48" />
      {children}
    </svg>
  );
});

export default StochoGive;
