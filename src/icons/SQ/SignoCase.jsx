import React from 'react';

export const iconData = {
  "id": "SignoCase",
  "name": "SignoCase",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.97 12.00 a 9.03 9.03 0 1 0 18.06 0 a 9.03 9.03 0 1 0 -18.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 8.99 a 8.51 2.5544459832855413 0 1 0 17.03 0 a 8.51 2.5544459832855413 0 1 0 -17.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 15.01 a 8.51 2.5544459832855413 0 1 0 17.03 0 a 8.51 2.5544459832855413 0 1 0 -17.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.97 A 2 2 0 0 0 12.00 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.97 A 2 2 0 0 1 12.00 21.03"
      }
    ]
  ]
};

export const SignoCase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.97 12.00 a 9.03 9.03 0 1 0 18.06 0 a 9.03 9.03 0 1 0 -18.06 0" />
      <path d="M 3.49 8.99 a 8.51 2.5544459832855413 0 1 0 17.03 0 a 8.51 2.5544459832855413 0 1 0 -17.03 0" />
      <path d="M 3.49 15.01 a 8.51 2.5544459832855413 0 1 0 17.03 0 a 8.51 2.5544459832855413 0 1 0 -17.03 0" />
      <path d="M 12.00 2.97 A 2 2 0 0 0 12.00 21.03" />
      <path d="M 12.00 2.97 A 2 2 0 0 1 12.00 21.03" />
      {children}
    </svg>
  );
});

export default SignoCase;
