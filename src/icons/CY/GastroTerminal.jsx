import React from 'react';

export const iconData = {
  "id": "GastroTerminal",
  "name": "GastroTerminal",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.56 9.17 C 11.25 7.37, 10.78 7.13, 17.88 16.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 6.60 C 19.83 5.92, 9.12 7.53, 19.79 21.97"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 5.00 C 5.59 10.58, 10.76 4.70, 17.71 21.70"
      }
    ]
  ]
};

export const GastroTerminal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.56 9.17 C 11.25 7.37, 10.78 7.13, 17.88 16.83" />
      <path d="M 5.28 6.60 C 19.83 5.92, 9.12 7.53, 19.79 21.97" />
      <path d="M 4.36 5.00 C 5.59 10.58, 10.76 4.70, 17.71 21.70" />
      {children}
    </svg>
  );
});

export default GastroTerminal;
