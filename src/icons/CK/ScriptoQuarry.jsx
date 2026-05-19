import React from 'react';

export const iconData = {
  "id": "ScriptoQuarry",
  "name": "ScriptoQuarry",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.81 5.99 A 2.93 5.14 0 0 1 5.50 11.93"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 6.27 C 12.68 5.30, 17.95 4.30, 6.47 10.32"
      }
    ],
    [
      "path",
      {
        "d": "M 2.07 17.60 A 5.90 4.47 91 0 0 15.26 10.04"
      }
    ],
    [
      "path",
      {
        "d": "M 3.18 11.06 A 5.20 5.90 136 0 0 13.05 8.04"
      }
    ],
    [
      "path",
      {
        "d": "M 17.11 21.23 Q 6.08 5.63 14.76 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 3.62 10.15 C 5.61 5.62, 20.72 2.37, 20.65 7.03"
      }
    ]
  ]
};

export const ScriptoQuarry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.81 5.99 A 2.93 5.14 0 0 1 5.50 11.93" />
      <path d="M 6.96 6.27 C 12.68 5.30, 17.95 4.30, 6.47 10.32" />
      <path d="M 2.07 17.60 A 5.90 4.47 91 0 0 15.26 10.04" />
      <path d="M 3.18 11.06 A 5.20 5.90 136 0 0 13.05 8.04" />
      <path d="M 17.11 21.23 Q 6.08 5.63 14.76 16.75" />
      <path d="M 3.62 10.15 C 5.61 5.62, 20.72 2.37, 20.65 7.03" />
      {children}
    </svg>
  );
});

export default ScriptoQuarry;
