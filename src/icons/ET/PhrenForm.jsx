import React from 'react';

export const iconData = {
  "id": "PhrenForm",
  "name": "PhrenForm",
  "category": "ET",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.63 12.00 a 8.37 8.37 0 1 0 16.75 0 a 8.37 8.37 0 1 0 -16.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 12.00 a 8.37 2.512271985411644 0 1 0 16.75 0 a 8.37 2.512271985411644 0 1 0 -16.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 6.08 A 2 2 0 0 0 17.92 17.92"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 6.08 A 2 2 0 0 1 17.92 17.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.63 A 2 2 0 0 0 12.00 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.63 A 2 2 0 0 1 12.00 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 6.08 A 2 2 0 0 0 6.08 17.92"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 6.08 A 2 2 0 0 1 6.08 17.92"
      }
    ]
  ]
};

export const PhrenForm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.63 12.00 a 8.37 8.37 0 1 0 16.75 0 a 8.37 8.37 0 1 0 -16.75 0" />
      <path d="M 3.63 12.00 a 8.37 2.512271985411644 0 1 0 16.75 0 a 8.37 2.512271985411644 0 1 0 -16.75 0" />
      <path d="M 17.92 6.08 A 2 2 0 0 0 17.92 17.92" />
      <path d="M 17.92 6.08 A 2 2 0 0 1 17.92 17.92" />
      <path d="M 12.00 3.63 A 2 2 0 0 0 12.00 20.37" />
      <path d="M 12.00 3.63 A 2 2 0 0 1 12.00 20.37" />
      <path d="M 6.08 6.08 A 2 2 0 0 0 6.08 17.92" />
      <path d="M 6.08 6.08 A 2 2 0 0 1 6.08 17.92" />
      {children}
    </svg>
  );
});

export default PhrenForm;
