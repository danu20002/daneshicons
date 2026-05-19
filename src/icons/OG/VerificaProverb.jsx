import React from 'react';

export const iconData = {
  "id": "VerificaProverb",
  "name": "VerificaProverb",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 2.6247530050110073 0 1 0 17.50 0 a 8.75 2.6247530050110073 0 1 0 -17.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.37 4.42 A 2 2 0 0 0 16.37 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 16.37 4.42 A 2 2 0 0 1 16.37 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.63 4.42 A 2 2 0 0 0 7.63 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.63 4.42 A 2 2 0 0 1 7.63 19.58"
      }
    ]
  ]
};

export const VerificaProverb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0" />
      <path d="M 3.25 12.00 a 8.75 2.6247530050110073 0 1 0 17.50 0 a 8.75 2.6247530050110073 0 1 0 -17.50 0" />
      <path d="M 16.37 4.42 A 2 2 0 0 0 16.37 19.58" />
      <path d="M 16.37 4.42 A 2 2 0 0 1 16.37 19.58" />
      <path d="M 7.63 4.42 A 2 2 0 0 0 7.63 19.58" />
      <path d="M 7.63 4.42 A 2 2 0 0 1 7.63 19.58" />
      {children}
    </svg>
  );
});

export default VerificaProverb;
