import React from 'react';

export const iconData = {
  "id": "TomboFender",
  "name": "TomboFender",
  "category": "ZO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.63 12.00 a 4.37 4.37 0 1 0 8.74 0 a 4.37 4.37 0 1 0 -8.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 0 12.15 0 a 6.07 6.07 0 1 0 -12.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 12.00 a 8.14 8.14 0 1 0 16.28 0 a 8.14 8.14 0 1 0 -16.28 0"
      }
    ]
  ]
};

export const TomboFender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0" stroke-dasharray="2 3" />
      <path d="M 7.63 12.00 a 4.37 4.37 0 1 0 8.74 0 a 4.37 4.37 0 1 0 -8.74 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 0 12.15 0 a 6.07 6.07 0 1 0 -12.15 0" />
      <path d="M 3.86 12.00 a 8.14 8.14 0 1 0 16.28 0 a 8.14 8.14 0 1 0 -16.28 0" />
      {children}
    </svg>
  );
});

export default TomboFender;
