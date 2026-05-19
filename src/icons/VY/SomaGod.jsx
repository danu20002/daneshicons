import React from 'react';

export const iconData = {
  "id": "SomaGod",
  "name": "SomaGod",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 8.88 C 13.22 19.39, 10.67 18.46, 21.55 18.21"
      }
    ],
    [
      "path",
      {
        "d": "M 9.13 9.62 C 14.25 9.04, 18.24 15.90, 15.10 17.65"
      }
    ],
    [
      "path",
      {
        "d": "M 2.07 4.96 C 16.83 13.88, 13.86 14.56, 21.11 17.37"
      }
    ]
  ]
};

export const SomaGod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 8.88 C 13.22 19.39, 10.67 18.46, 21.55 18.21" />
      <path d="M 9.13 9.62 C 14.25 9.04, 18.24 15.90, 15.10 17.65" />
      <path d="M 2.07 4.96 C 16.83 13.88, 13.86 14.56, 21.11 17.37" />
      {children}
    </svg>
  );
});

export default SomaGod;
