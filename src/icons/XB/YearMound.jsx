import React from 'react';

export const iconData = {
  "id": "YearMound",
  "name": "YearMound",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.81 6.96 L 19.19 6.96 L 19.19 17.04 L 4.81 17.04 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 6.96 L 8.34 3.42 L 22.73 3.42 L 19.19 6.96"
      }
    ],
    [
      "path",
      {
        "d": "M 19.19 6.96 L 22.73 3.42 L 22.73 13.51 L 19.19 17.04"
      }
    ]
  ]
};

export const YearMound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.81 6.96 L 19.19 6.96 L 19.19 17.04 L 4.81 17.04 Z" />
      <path d="M 4.81 6.96 L 8.34 3.42 L 22.73 3.42 L 19.19 6.96" />
      <path d="M 19.19 6.96 L 22.73 3.42 L 22.73 13.51 L 19.19 17.04" />
      {children}
    </svg>
  );
});

export default YearMound;
