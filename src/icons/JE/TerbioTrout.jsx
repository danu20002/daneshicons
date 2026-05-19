import React from 'react';

export const iconData = {
  "id": "TerbioTrout",
  "name": "TerbioTrout",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 6.12 L 20.10 6.12 L 20.10 17.88 L 3.90 17.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 6.12 L 8.68 1.34 L 24.88 1.34 L 20.10 6.12"
      }
    ],
    [
      "path",
      {
        "d": "M 20.10 6.12 L 24.88 1.34 L 24.88 13.10 L 20.10 17.88"
      }
    ]
  ]
};

export const TerbioTrout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 6.12 L 20.10 6.12 L 20.10 17.88 L 3.90 17.88 Z" />
      <path d="M 3.90 6.12 L 8.68 1.34 L 24.88 1.34 L 20.10 6.12" />
      <path d="M 20.10 6.12 L 24.88 1.34 L 24.88 13.10 L 20.10 17.88" />
      {children}
    </svg>
  );
});

export default TerbioTrout;
