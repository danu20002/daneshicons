import React from 'react';

export const iconData = {
  "id": "GlyphoTwin",
  "name": "GlyphoTwin",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.49 12.00 a 9.51 9.51 0 1 0 19.01 0 a 9.51 9.51 0 1 0 -19.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 7.25 a 8.23 2.4696805385881957 0 1 0 16.46 0 a 8.23 2.4696805385881957 0 1 0 -16.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.49 12.00 a 9.51 2.8517414475325493 0 1 0 19.01 0 a 9.51 2.8517414475325493 0 1 0 -19.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 16.75 a 8.23 2.4696805385881957 0 1 0 16.46 0 a 8.23 2.4696805385881957 0 1 0 -16.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.75 3.77 A 2 2 0 0 0 16.75 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 16.75 3.77 A 2 2 0 0 1 16.75 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 3.77 A 2 2 0 0 0 7.25 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 3.77 A 2 2 0 0 1 7.25 20.23"
      }
    ]
  ]
};

export const GlyphoTwin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.49 12.00 a 9.51 9.51 0 1 0 19.01 0 a 9.51 9.51 0 1 0 -19.01 0" />
      <path d="M 3.77 7.25 a 8.23 2.4696805385881957 0 1 0 16.46 0 a 8.23 2.4696805385881957 0 1 0 -16.46 0" />
      <path d="M 2.49 12.00 a 9.51 2.8517414475325493 0 1 0 19.01 0 a 9.51 2.8517414475325493 0 1 0 -19.01 0" />
      <path d="M 3.77 16.75 a 8.23 2.4696805385881957 0 1 0 16.46 0 a 8.23 2.4696805385881957 0 1 0 -16.46 0" />
      <path d="M 16.75 3.77 A 2 2 0 0 0 16.75 20.23" />
      <path d="M 16.75 3.77 A 2 2 0 0 1 16.75 20.23" />
      <path d="M 7.25 3.77 A 2 2 0 0 0 7.25 20.23" />
      <path d="M 7.25 3.77 A 2 2 0 0 1 7.25 20.23" />
      {children}
    </svg>
  );
});

export default GlyphoTwin;
