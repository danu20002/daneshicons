import React from 'react';

export const iconData = {
  "id": "StenoSpend",
  "name": "StenoSpend",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.22 12.00 L 18.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.22 L 12.00 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 7.25 L 16.75 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 16.75 L 16.75 7.25"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 12.00 a 9.01 9.01 0 1 0 18.02 0 a 9.01 9.01 0 1 0 -18.02 0"
      }
    ]
  ]
};

export const StenoSpend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.22 12.00 L 18.78 12.00" />
      <path d="M 12.00 5.22 L 12.00 18.78" />
      <path d="M 7.25 7.25 L 16.75 16.75" />
      <path d="M 7.25 16.75 L 16.75 7.25" />
      <path d="M 2.99 12.00 a 9.01 9.01 0 1 0 18.02 0 a 9.01 9.01 0 1 0 -18.02 0" />
      {children}
    </svg>
  );
});

export default StenoSpend;
