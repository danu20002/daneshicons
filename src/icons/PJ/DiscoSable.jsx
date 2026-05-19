import React from 'react';

export const iconData = {
  "id": "DiscoSable",
  "name": "DiscoSable",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.96 3.03 C 12.44 16.51, 6.02 18.42, 17.21 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 9.57 C 15.80 15.10, 9.25 13.45, 14.58 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 2.78 C 6.01 5.22, 18.73 4.50, 21.80 15.46"
      }
    ]
  ]
};

export const DiscoSable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.96 3.03 C 12.44 16.51, 6.02 18.42, 17.21 19.88" />
      <path d="M 6.10 9.57 C 15.80 15.10, 9.25 13.45, 14.58 20.81" />
      <path d="M 6.45 2.78 C 6.01 5.22, 18.73 4.50, 21.80 15.46" />
      {children}
    </svg>
  );
});

export default DiscoSable;
