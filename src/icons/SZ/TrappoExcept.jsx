import React from 'react';

export const iconData = {
  "id": "TrappoExcept",
  "name": "TrappoExcept",
  "category": "SZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.22 12.00 a 3.78 3.78 0 1 0 7.55 0 a 3.78 3.78 0 1 0 -7.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 12.00 a 5.50 5.50 0 1 0 10.99 0 a 5.50 5.50 0 1 0 -10.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 12.00 a 6.96 6.96 0 1 0 13.91 0 a 6.96 6.96 0 1 0 -13.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 12.00 a 8.58 8.58 0 1 0 17.16 0 a 8.58 8.58 0 1 0 -17.16 0",
        "stroke-dasharray": "3 2"
      }
    ]
  ]
};

export const TrappoExcept = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0" />
      <path d="M 8.22 12.00 a 3.78 3.78 0 1 0 7.55 0 a 3.78 3.78 0 1 0 -7.55 0" />
      <path d="M 6.50 12.00 a 5.50 5.50 0 1 0 10.99 0 a 5.50 5.50 0 1 0 -10.99 0" />
      <path d="M 5.04 12.00 a 6.96 6.96 0 1 0 13.91 0 a 6.96 6.96 0 1 0 -13.91 0" />
      <path d="M 3.42 12.00 a 8.58 8.58 0 1 0 17.16 0 a 8.58 8.58 0 1 0 -17.16 0" stroke-dasharray="3 2" />
      {children}
    </svg>
  );
});

export default TrappoExcept;
