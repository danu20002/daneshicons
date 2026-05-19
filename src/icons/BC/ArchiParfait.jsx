import React from 'react';

export const iconData = {
  "id": "ArchiParfait",
  "name": "ArchiParfait",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.26 12.00 a 9.74 9.74 0 1 0 19.47 0 a 9.74 9.74 0 1 0 -19.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 7.13 a 8.43 2.529557152450495 0 1 0 16.86 0 a 8.43 2.529557152450495 0 1 0 -16.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.26 12.00 a 9.74 2.9208810057956724 0 1 0 19.47 0 a 9.74 2.9208810057956724 0 1 0 -19.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 16.87 a 8.43 2.529557152450495 0 1 0 16.86 0 a 8.43 2.529557152450495 0 1 0 -16.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.26 A 2 2 0 0 0 12.00 21.74"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.26 A 2 2 0 0 1 12.00 21.74"
      }
    ]
  ]
};

export const ArchiParfait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.26 12.00 a 9.74 9.74 0 1 0 19.47 0 a 9.74 9.74 0 1 0 -19.47 0" />
      <path d="M 3.57 7.13 a 8.43 2.529557152450495 0 1 0 16.86 0 a 8.43 2.529557152450495 0 1 0 -16.86 0" />
      <path d="M 2.26 12.00 a 9.74 2.9208810057956724 0 1 0 19.47 0 a 9.74 2.9208810057956724 0 1 0 -19.47 0" />
      <path d="M 3.57 16.87 a 8.43 2.529557152450495 0 1 0 16.86 0 a 8.43 2.529557152450495 0 1 0 -16.86 0" />
      <path d="M 12.00 2.26 A 2 2 0 0 0 12.00 21.74" />
      <path d="M 12.00 2.26 A 2 2 0 0 1 12.00 21.74" />
      {children}
    </svg>
  );
});

export default ArchiParfait;
