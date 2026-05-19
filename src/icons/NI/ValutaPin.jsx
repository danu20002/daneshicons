import React from 'react';

export const iconData = {
  "id": "ValutaPin",
  "name": "ValutaPin",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.03 6.94 L 15.03 6.94"
      }
    ],
    [
      "path",
      {
        "d": "M 16.51 9.51 L 17.75 13.31"
      }
    ],
    [
      "path",
      {
        "d": "M 15.76 15.52 L 12.53 17.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.81 16.67 L 6.58 14.32"
      }
    ],
    [
      "path",
      {
        "d": "M 6.89 11.36 L 8.12 7.56"
      }
    ]
  ]
};

export const ValutaPin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.03 6.94 L 15.03 6.94" />
      <path d="M 16.51 9.51 L 17.75 13.31" />
      <path d="M 15.76 15.52 L 12.53 17.87" />
      <path d="M 9.81 16.67 L 6.58 14.32" />
      <path d="M 6.89 11.36 L 8.12 7.56" />
      {children}
    </svg>
  );
});

export default ValutaPin;
