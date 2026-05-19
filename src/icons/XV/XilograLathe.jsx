import React from 'react';

export const iconData = {
  "id": "XilograLathe",
  "name": "XilograLathe",
  "category": "XV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.23 12.00 a 7.77 7.77 0 1 0 15.54 0 a 7.77 7.77 0 1 0 -15.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 12.00 a 6.00 6.00 0 1 1 12.00 0 a 6.00 6.00 0 1 1 -12.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.27 12.00 L 21.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 16.27 L 19.50 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 14.25 18.91 L 14.86 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 9.75 18.91 L 9.14 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 16.27 L 4.50 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 12.00 L 2.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 7.73 L 4.50 6.55"
      }
    ],
    [
      "path",
      {
        "d": "M 9.75 5.09 L 9.14 3.19"
      }
    ],
    [
      "path",
      {
        "d": "M 14.25 5.09 L 14.86 3.19"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 7.73 L 19.50 6.55"
      }
    ]
  ]
};

export const XilograLathe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.23 12.00 a 7.77 7.77 0 1 0 15.54 0 a 7.77 7.77 0 1 0 -15.54 0" />
      <path d="M 6.00 12.00 a 6.00 6.00 0 1 1 12.00 0 a 6.00 6.00 0 1 1 -12.00 0" />
      <path d="M 19.27 12.00 L 21.27 12.00" />
      <path d="M 17.88 16.27 L 19.50 17.45" />
      <path d="M 14.25 18.91 L 14.86 20.81" />
      <path d="M 9.75 18.91 L 9.14 20.81" />
      <path d="M 6.12 16.27 L 4.50 17.45" />
      <path d="M 4.73 12.00 L 2.73 12.00" />
      <path d="M 6.12 7.73 L 4.50 6.55" />
      <path d="M 9.75 5.09 L 9.14 3.19" />
      <path d="M 14.25 5.09 L 14.86 3.19" />
      <path d="M 17.88 7.73 L 19.50 6.55" />
      {children}
    </svg>
  );
});

export default XilograLathe;
