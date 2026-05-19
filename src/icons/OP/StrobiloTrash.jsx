import React from 'react';

export const iconData = {
  "id": "StrobiloTrash",
  "name": "StrobiloTrash",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 12.00 a 2.20 2.20 0 1 0 4.40 0 a 2.20 2.20 0 1 0 -4.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 a 4.31 4.31 0 1 0 8.61 0 a 4.31 4.31 0 1 0 -8.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.80 12.00 a 6.20 6.20 0 1 0 12.41 0 a 6.20 6.20 0 1 0 -12.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 12.00 a 8.24 8.24 0 1 0 16.48 0 a 8.24 8.24 0 1 0 -16.48 0",
        "stroke-dasharray": "3 1"
      }
    ]
  ]
};

export const StrobiloTrash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 12.00 a 2.20 2.20 0 1 0 4.40 0 a 2.20 2.20 0 1 0 -4.40 0" />
      <path d="M 7.69 12.00 a 4.31 4.31 0 1 0 8.61 0 a 4.31 4.31 0 1 0 -8.61 0" />
      <path d="M 5.80 12.00 a 6.20 6.20 0 1 0 12.41 0 a 6.20 6.20 0 1 0 -12.41 0" />
      <path d="M 3.76 12.00 a 8.24 8.24 0 1 0 16.48 0 a 8.24 8.24 0 1 0 -16.48 0" stroke-dasharray="3 1" />
      {children}
    </svg>
  );
});

export default StrobiloTrash;
