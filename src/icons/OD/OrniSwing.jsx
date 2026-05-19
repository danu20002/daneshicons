import React from 'react';

export const iconData = {
  "id": "OrniSwing",
  "name": "OrniSwing",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.04 12.33 L 16.23 19.99 L 7.19 19.66 L 2.96 11.67 L 7.77 4.01 L 16.81 4.34 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.54 14.76 L 12.38 18.18 L 6.84 15.42 L 6.46 9.24 L 11.62 5.82 L 17.16 8.58 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 14.01 L 11.54 15.23 L 8.97 13.22 L 9.43 9.99 L 12.46 8.77 L 15.03 10.78 Z"
      }
    ]
  ]
};

export const OrniSwing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.04 12.33 L 16.23 19.99 L 7.19 19.66 L 2.96 11.67 L 7.77 4.01 L 16.81 4.34 Z" />
      <path d="M 17.54 14.76 L 12.38 18.18 L 6.84 15.42 L 6.46 9.24 L 11.62 5.82 L 17.16 8.58 Z" />
      <path d="M 14.57 14.01 L 11.54 15.23 L 8.97 13.22 L 9.43 9.99 L 12.46 8.77 L 15.03 10.78 Z" />
      {children}
    </svg>
  );
});

export default OrniSwing;
