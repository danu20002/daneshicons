import React from 'react';

export const iconData = {
  "id": "TriploSweat",
  "name": "TriploSweat",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.90 18.07 L 8.81 12.21 L 2.19 7.16 L 10.22 9.34 L 11.29 1.09 L 13.42 9.13 L 21.10 5.93 L 15.19 11.79 L 21.81 16.84 L 13.78 14.66 L 12.71 22.91 L 10.58 14.87 Z"
      }
    ]
  ]
};

export const TriploSweat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.90 18.07 L 8.81 12.21 L 2.19 7.16 L 10.22 9.34 L 11.29 1.09 L 13.42 9.13 L 21.10 5.93 L 15.19 11.79 L 21.81 16.84 L 13.78 14.66 L 12.71 22.91 L 10.58 14.87 Z" />
      {children}
    </svg>
  );
});

export default TriploSweat;
