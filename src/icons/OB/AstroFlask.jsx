import React from 'react';

export const iconData = {
  "id": "AstroFlask",
  "name": "AstroFlask",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.23 10.10 L 15.23 10.10"
      }
    ],
    [
      "path",
      {
        "d": "M 13.57 10.68 L 14.80 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 13.74 13.08 L 10.51 15.43"
      }
    ],
    [
      "path",
      {
        "d": "M 11.51 13.99 L 8.27 11.64"
      }
    ],
    [
      "path",
      {
        "d": "M 9.96 12.15 L 11.19 8.34"
      }
    ]
  ]
};

export const AstroFlask = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.23 10.10 L 15.23 10.10" />
      <path d="M 13.57 10.68 L 14.80 14.48" />
      <path d="M 13.74 13.08 L 10.51 15.43" />
      <path d="M 11.51 13.99 L 8.27 11.64" />
      <path d="M 9.96 12.15 L 11.19 8.34" />
      {children}
    </svg>
  );
});

export default AstroFlask;
