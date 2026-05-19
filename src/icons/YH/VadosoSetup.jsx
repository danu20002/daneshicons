import React from 'react';

export const iconData = {
  "id": "VadosoSetup",
  "name": "VadosoSetup",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 12.00 L 20.64 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.36 L 12.00 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 5.95 L 18.05 18.05"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 18.05 L 18.05 5.95"
      }
    ],
    [
      "path",
      {
        "d": "M 1.05 12.00 a 10.95 10.95 0 1 0 21.91 0 a 10.95 10.95 0 1 0 -21.91 0"
      }
    ]
  ]
};

export const VadosoSetup = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 12.00 L 20.64 12.00" />
      <path d="M 12.00 3.36 L 12.00 20.64" />
      <path d="M 5.95 5.95 L 18.05 18.05" />
      <path d="M 5.95 18.05 L 18.05 5.95" />
      <path d="M 1.05 12.00 a 10.95 10.95 0 1 0 21.91 0 a 10.95 10.95 0 1 0 -21.91 0" />
      {children}
    </svg>
  );
});

export default VadosoSetup;
