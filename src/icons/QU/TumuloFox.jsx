import React from 'react';

export const iconData = {
  "id": "TumuloFox",
  "name": "TumuloFox",
  "category": "QU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.92 12.00 a 2.08 2.08 0 1 0 4.16 0 a 2.08 2.08 0 1 0 -4.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 12.00 a 6.35 6.35 0 1 0 12.69 0 a 6.35 6.35 0 1 0 -12.69 0"
      }
    ]
  ]
};

export const TumuloFox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.92 12.00 a 2.08 2.08 0 1 0 4.16 0 a 2.08 2.08 0 1 0 -4.16 0" />
      <path d="M 5.65 12.00 a 6.35 6.35 0 1 0 12.69 0 a 6.35 6.35 0 1 0 -12.69 0" />
      {children}
    </svg>
  );
});

export default TumuloFox;
