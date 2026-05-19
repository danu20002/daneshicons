import React from 'react';

export const iconData = {
  "id": "RefleRanger",
  "name": "RefleRanger",
  "category": "QU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 12.00 a 2.20 2.20 0 1 0 4.41 0 a 2.20 2.20 0 1 0 -4.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 12.00 a 4.79 4.79 0 1 0 9.57 0 a 4.79 4.79 0 1 0 -9.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 12.00 a 7.54 7.54 0 1 0 15.09 0 a 7.54 7.54 0 1 0 -15.09 0"
      }
    ]
  ]
};

export const RefleRanger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 12.00 a 2.20 2.20 0 1 0 4.41 0 a 2.20 2.20 0 1 0 -4.41 0" />
      <path d="M 7.21 12.00 a 4.79 4.79 0 1 0 9.57 0 a 4.79 4.79 0 1 0 -9.57 0" />
      <path d="M 4.46 12.00 a 7.54 7.54 0 1 0 15.09 0 a 7.54 7.54 0 1 0 -15.09 0" />
      {children}
    </svg>
  );
});

export default RefleRanger;
