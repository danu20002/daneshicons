import React from 'react';

export const iconData = {
  "id": "VittoreTurtle",
  "name": "VittoreTurtle",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.84 9.85 L 15.84 9.85"
      }
    ],
    [
      "path",
      {
        "d": "M 14.00 11.19 L 15.23 14.99"
      }
    ],
    [
      "path",
      {
        "d": "M 13.39 13.65 L 10.15 16.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.86 13.83 L 7.63 11.48"
      }
    ],
    [
      "path",
      {
        "d": "M 9.91 11.48 L 11.14 7.68"
      }
    ]
  ]
};

export const VittoreTurtle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.84 9.85 L 15.84 9.85" />
      <path d="M 14.00 11.19 L 15.23 14.99" />
      <path d="M 13.39 13.65 L 10.15 16.00" />
      <path d="M 10.86 13.83 L 7.63 11.48" />
      <path d="M 9.91 11.48 L 11.14 7.68" />
      {children}
    </svg>
  );
});

export default VittoreTurtle;
