import React from 'react';

export const iconData = {
  "id": "FluxoIndigo",
  "name": "FluxoIndigo",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.08 9.00 L 13.08 9.00"
      }
    ],
    [
      "path",
      {
        "d": "M 13.14 7.98 L 15.14 11.44"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 10.97 L 14.05 14.44"
      }
    ],
    [
      "path",
      {
        "d": "M 14.92 15.00 L 10.92 15.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.86 16.02 L 8.86 12.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 13.03 L 9.95 9.56"
      }
    ]
  ]
};

export const FluxoIndigo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.08 9.00 L 13.08 9.00" />
      <path d="M 13.14 7.98 L 15.14 11.44" />
      <path d="M 16.05 10.97 L 14.05 14.44" />
      <path d="M 14.92 15.00 L 10.92 15.00" />
      <path d="M 10.86 16.02 L 8.86 12.56" />
      <path d="M 7.95 13.03 L 9.95 9.56" />
      {children}
    </svg>
  );
});

export default FluxoIndigo;
