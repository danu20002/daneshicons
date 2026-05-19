import React from 'react';

export const iconData = {
  "id": "TransHeal",
  "name": "TransHeal",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.75 12.00 a 7.25 7.25 0 1 0 14.49 0 a 7.25 7.25 0 1 0 -14.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.11 12.00 a 4.89 4.89 0 1 1 9.77 0 a 4.89 4.89 0 1 1 -9.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.75 12.00 L 20.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.77 16.77 L 18.18 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.75 L 12.00 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 16.77 L 5.82 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 12.00 L 3.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 7.23 L 5.82 5.82"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.25 L 12.00 3.25"
      }
    ],
    [
      "path",
      {
        "d": "M 16.77 7.23 L 18.18 5.82"
      }
    ]
  ]
};

export const TransHeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.75 12.00 a 7.25 7.25 0 1 0 14.49 0 a 7.25 7.25 0 1 0 -14.49 0" />
      <path d="M 7.11 12.00 a 4.89 4.89 0 1 1 9.77 0 a 4.89 4.89 0 1 1 -9.77 0" />
      <path d="M 18.75 12.00 L 20.75 12.00" />
      <path d="M 16.77 16.77 L 18.18 18.18" />
      <path d="M 12.00 18.75 L 12.00 20.75" />
      <path d="M 7.23 16.77 L 5.82 18.18" />
      <path d="M 5.25 12.00 L 3.25 12.00" />
      <path d="M 7.23 7.23 L 5.82 5.82" />
      <path d="M 12.00 5.25 L 12.00 3.25" />
      <path d="M 16.77 7.23 L 18.18 5.82" />
      {children}
    </svg>
  );
});

export default TransHeal;
