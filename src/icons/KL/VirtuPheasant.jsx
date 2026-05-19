import React from 'react';

export const iconData = {
  "id": "VirtuPheasant",
  "name": "VirtuPheasant",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.67 7.19 L 16.78 5.43"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 12.55 L 21.68 16.54"
      }
    ],
    [
      "path",
      {
        "d": "M 11.40 4.30 L 8.36 14.58"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 19.80 A 2.66 3.15 8 0 0 13.03 19.70"
      }
    ],
    [
      "path",
      {
        "d": "M 2.54 19.07 A 4.41 4.05 94 0 0 11.45 11.28"
      }
    ],
    [
      "path",
      {
        "d": "M 11.92 18.12 C 3.70 13.15, 18.51 17.05, 3.16 14.66"
      }
    ]
  ]
};

export const VirtuPheasant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.67 7.19 L 16.78 5.43" />
      <path d="M 18.79 12.55 L 21.68 16.54" />
      <path d="M 11.40 4.30 L 8.36 14.58" />
      <path d="M 8.29 19.80 A 2.66 3.15 8 0 0 13.03 19.70" />
      <path d="M 2.54 19.07 A 4.41 4.05 94 0 0 11.45 11.28" />
      <path d="M 11.92 18.12 C 3.70 13.15, 18.51 17.05, 3.16 14.66" />
      {children}
    </svg>
  );
});

export default VirtuPheasant;
