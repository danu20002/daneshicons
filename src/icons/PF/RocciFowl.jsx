import React from 'react';

export const iconData = {
  "id": "RocciFowl",
  "name": "RocciFowl",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.74 20.93 L 9.14 14.78 L 2.99 15.01 L 8.05 11.50 L 4.02 6.83 L 9.93 8.60 L 11.07 2.54 L 13.37 8.26 L 18.81 5.37 L 15.78 10.74 L 21.43 13.19 L 15.35 14.17 L 16.94 20.12 L 12.39 15.97 Z"
      }
    ]
  ]
};

export const RocciFowl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.74 20.93 L 9.14 14.78 L 2.99 15.01 L 8.05 11.50 L 4.02 6.83 L 9.93 8.60 L 11.07 2.54 L 13.37 8.26 L 18.81 5.37 L 15.78 10.74 L 21.43 13.19 L 15.35 14.17 L 16.94 20.12 L 12.39 15.97 Z" />
      {children}
    </svg>
  );
});

export default RocciFowl;
