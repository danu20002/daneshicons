import React from 'react';

export const iconData = {
  "id": "PhytoDope",
  "name": "PhytoDope",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.44 12.00 L 19.56 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.44 L 12.00 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 6.71 6.71 L 17.29 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.71 17.29 L 17.29 6.71"
      }
    ],
    [
      "path",
      {
        "d": "M 1.92 12.00 a 10.08 10.08 0 1 0 20.15 0 a 10.08 10.08 0 1 0 -20.15 0"
      }
    ]
  ]
};

export const PhytoDope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.44 12.00 L 19.56 12.00" />
      <path d="M 12.00 4.44 L 12.00 19.56" />
      <path d="M 6.71 6.71 L 17.29 17.29" />
      <path d="M 6.71 17.29 L 17.29 6.71" />
      <path d="M 1.92 12.00 a 10.08 10.08 0 1 0 20.15 0 a 10.08 10.08 0 1 0 -20.15 0" />
      {children}
    </svg>
  );
});

export default PhytoDope;
