import React from 'react';

export const iconData = {
  "id": "VitaGirdle",
  "name": "VitaGirdle",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.69 5.38 Q 18.82 9.05 5.53 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 11.42 20.21 L 4.20 5.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 13.30 C 19.44 11.85, 20.25 7.74, 9.26 17.16"
      }
    ],
    [
      "path",
      {
        "d": "M 19.57 19.19 A 3.02 2.20 61 0 0 7.44 14.97"
      }
    ],
    [
      "path",
      {
        "d": "M 20.94 12.13 A 4.09 2.12 42 0 0 2.23 17.63"
      }
    ]
  ]
};

export const VitaGirdle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.69 5.38 Q 18.82 9.05 5.53 18.15" />
      <path d="M 11.42 20.21 L 4.20 5.64" />
      <path d="M 8.10 13.30 C 19.44 11.85, 20.25 7.74, 9.26 17.16" />
      <path d="M 19.57 19.19 A 3.02 2.20 61 0 0 7.44 14.97" />
      <path d="M 20.94 12.13 A 4.09 2.12 42 0 0 2.23 17.63" />
      {children}
    </svg>
  );
});

export default VitaGirdle;
