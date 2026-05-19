import React from 'react';

export const iconData = {
  "id": "ScotoMeet",
  "name": "ScotoMeet",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.58 1.63 L 15.19 9.32 L 22.66 11.25 L 15.53 14.20 L 16.01 21.91 L 10.99 16.04 L 3.82 18.87 L 7.85 12.29 L 2.94 6.34 L 10.44 8.14 Z"
      }
    ]
  ]
};

export const ScotoMeet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.58 1.63 L 15.19 9.32 L 22.66 11.25 L 15.53 14.20 L 16.01 21.91 L 10.99 16.04 L 3.82 18.87 L 7.85 12.29 L 2.94 6.34 L 10.44 8.14 Z" />
      {children}
    </svg>
  );
});

export default ScotoMeet;
