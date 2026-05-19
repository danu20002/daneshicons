import React from 'react';

export const iconData = {
  "id": "TrilobTwig",
  "name": "TrilobTwig",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 12.00 a 8.30 8.30 0 1 0 16.61 0 a 8.30 8.30 0 1 0 -16.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 12.00 a 8.30 2.490995434485376 0 1 0 16.61 0 a 8.30 2.490995434485376 0 1 0 -16.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.70 A 2 2 0 0 0 12.00 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.70 A 2 2 0 0 1 12.00 20.30"
      }
    ]
  ]
};

export const TrilobTwig = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 12.00 a 8.30 8.30 0 1 0 16.61 0 a 8.30 8.30 0 1 0 -16.61 0" />
      <path d="M 3.70 12.00 a 8.30 2.490995434485376 0 1 0 16.61 0 a 8.30 2.490995434485376 0 1 0 -16.61 0" />
      <path d="M 12.00 3.70 A 2 2 0 0 0 12.00 20.30" />
      <path d="M 12.00 3.70 A 2 2 0 0 1 12.00 20.30" />
      {children}
    </svg>
  );
});

export default TrilobTwig;
