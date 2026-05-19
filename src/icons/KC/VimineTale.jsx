import React from 'react';

export const iconData = {
  "id": "VimineTale",
  "name": "VimineTale",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.71 3.04 L 13.11 7.64 L 17.42 4.75 L 15.87 9.70 L 20.96 10.71 L 16.36 13.11 L 19.25 17.42 L 14.30 15.87 L 13.29 20.96 L 10.89 16.36 L 6.58 19.25 L 8.13 14.30 L 3.04 13.29 L 7.64 10.89 L 4.75 6.58 L 9.70 8.13 Z"
      }
    ]
  ]
};

export const VimineTale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.71 3.04 L 13.11 7.64 L 17.42 4.75 L 15.87 9.70 L 20.96 10.71 L 16.36 13.11 L 19.25 17.42 L 14.30 15.87 L 13.29 20.96 L 10.89 16.36 L 6.58 19.25 L 8.13 14.30 L 3.04 13.29 L 7.64 10.89 L 4.75 6.58 L 9.70 8.13 Z" />
      {children}
    </svg>
  );
});

export default VimineTale;
