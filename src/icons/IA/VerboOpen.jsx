import React from 'react';

export const iconData = {
  "id": "VerboOpen",
  "name": "VerboOpen",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.87 0 a 2.43 2.43 0 1 0 -4.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 12.00 a 3.65 3.65 0 1 0 7.29 0 a 3.65 3.65 0 1 0 -7.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.74 12.00 a 5.26 5.26 0 1 0 10.52 0 a 5.26 5.26 0 1 0 -10.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 12.00 a 7.22 7.22 0 1 0 14.44 0 a 7.22 7.22 0 1 0 -14.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.21 0 a 8.60 8.60 0 1 0 -17.21 0"
      }
    ]
  ]
};

export const VerboOpen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.87 0 a 2.43 2.43 0 1 0 -4.87 0" />
      <path d="M 8.35 12.00 a 3.65 3.65 0 1 0 7.29 0 a 3.65 3.65 0 1 0 -7.29 0" />
      <path d="M 6.74 12.00 a 5.26 5.26 0 1 0 10.52 0 a 5.26 5.26 0 1 0 -10.52 0" />
      <path d="M 4.78 12.00 a 7.22 7.22 0 1 0 14.44 0 a 7.22 7.22 0 1 0 -14.44 0" />
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.21 0 a 8.60 8.60 0 1 0 -17.21 0" />
      {children}
    </svg>
  );
});

export default VerboOpen;
