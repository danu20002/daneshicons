import React from 'react';

export const iconData = {
  "id": "UncinoGram",
  "name": "UncinoGram",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.73 19.66 L 3.97 14.22 L 5.26 7.11 L 11.62 3.68 L 18.27 6.51 L 20.20 13.48 L 15.95 19.34 Z"
      }
    ]
  ]
};

export const UncinoGram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.73 19.66 L 3.97 14.22 L 5.26 7.11 L 11.62 3.68 L 18.27 6.51 L 20.20 13.48 L 15.95 19.34 Z" />
      {children}
    </svg>
  );
});

export default UncinoGram;
