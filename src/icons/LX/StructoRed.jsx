import React from 'react';

export const iconData = {
  "id": "StructoRed",
  "name": "StructoRed",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.88 21.91 L 10.75 4.75"
      }
    ],
    [
      "path",
      {
        "d": "M 21.66 12.99 Q 14.93 5.24 10.33 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 10.85 4.85 C 12.64 3.40, 9.13 16.09, 9.68 18.83"
      }
    ],
    [
      "path",
      {
        "d": "M 10.08 10.16 C 18.57 13.26, 3.58 5.58, 9.79 11.20"
      }
    ],
    [
      "path",
      {
        "d": "M 21.88 6.35 C 6.83 9.66, 14.06 11.45, 12.33 2.92"
      }
    ]
  ]
};

export const StructoRed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.88 21.91 L 10.75 4.75" />
      <path d="M 21.66 12.99 Q 14.93 5.24 10.33 18.43" />
      <path d="M 10.85 4.85 C 12.64 3.40, 9.13 16.09, 9.68 18.83" />
      <path d="M 10.08 10.16 C 18.57 13.26, 3.58 5.58, 9.79 11.20" />
      <path d="M 21.88 6.35 C 6.83 9.66, 14.06 11.45, 12.33 2.92" />
      {children}
    </svg>
  );
});

export default StructoRed;
