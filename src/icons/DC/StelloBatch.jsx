import React from 'react';

export const iconData = {
  "id": "StelloBatch",
  "name": "StelloBatch",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.83 12.00 Q 14.86 12.77 20.51 16.91"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 16.91 Q 14.09 14.09 16.91 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 16.91 20.51 Q 12.77 14.86 12.00 21.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.83 Q 11.23 14.86 7.09 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 20.51 Q 9.91 14.09 3.49 16.91"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 16.91 Q 9.14 12.77 2.17 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.17 12.00 Q 9.14 11.23 3.49 7.09"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 7.09 Q 9.91 9.91 7.09 3.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 3.49 Q 11.23 9.14 12.00 2.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.17 Q 12.77 9.14 16.91 3.49"
      }
    ],
    [
      "path",
      {
        "d": "M 16.91 3.49 Q 14.09 9.91 20.51 7.09"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 7.09 Q 14.86 11.23 21.83 12.00"
      }
    ]
  ]
};

export const StelloBatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.83 12.00 Q 14.86 12.77 20.51 16.91" />
      <path d="M 20.51 16.91 Q 14.09 14.09 16.91 20.51" />
      <path d="M 16.91 20.51 Q 12.77 14.86 12.00 21.83" />
      <path d="M 12.00 21.83 Q 11.23 14.86 7.09 20.51" />
      <path d="M 7.09 20.51 Q 9.91 14.09 3.49 16.91" />
      <path d="M 3.49 16.91 Q 9.14 12.77 2.17 12.00" />
      <path d="M 2.17 12.00 Q 9.14 11.23 3.49 7.09" />
      <path d="M 3.49 7.09 Q 9.91 9.91 7.09 3.49" />
      <path d="M 7.09 3.49 Q 11.23 9.14 12.00 2.17" />
      <path d="M 12.00 2.17 Q 12.77 9.14 16.91 3.49" />
      <path d="M 16.91 3.49 Q 14.09 9.91 20.51 7.09" />
      <path d="M 20.51 7.09 Q 14.86 11.23 21.83 12.00" />
      {children}
    </svg>
  );
});

export default StelloBatch;
