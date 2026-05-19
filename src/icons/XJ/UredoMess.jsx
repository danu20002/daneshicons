import React from 'react';

export const iconData = {
  "id": "UredoMess",
  "name": "UredoMess",
  "category": "XJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 12.00 a 2.09 2.09 0 1 0 4.19 0 a 2.09 2.09 0 1 0 -4.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 12.00 a 4.26 4.26 0 1 0 8.53 0 a 4.26 4.26 0 1 0 -8.53 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 12.00 a 6.36 6.36 0 1 0 12.71 0 a 6.36 6.36 0 1 0 -12.71 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 12.00 a 8.39 8.39 0 1 0 16.79 0 a 8.39 8.39 0 1 0 -16.79 0"
      }
    ]
  ]
};

export const UredoMess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 12.00 a 2.09 2.09 0 1 0 4.19 0 a 2.09 2.09 0 1 0 -4.19 0" />
      <path d="M 7.74 12.00 a 4.26 4.26 0 1 0 8.53 0 a 4.26 4.26 0 1 0 -8.53 0" stroke-dasharray="4 1" />
      <path d="M 5.64 12.00 a 6.36 6.36 0 1 0 12.71 0 a 6.36 6.36 0 1 0 -12.71 0" stroke-dasharray="6 2" />
      <path d="M 3.61 12.00 a 8.39 8.39 0 1 0 16.79 0 a 8.39 8.39 0 1 0 -16.79 0" />
      {children}
    </svg>
  );
});

export default UredoMess;
