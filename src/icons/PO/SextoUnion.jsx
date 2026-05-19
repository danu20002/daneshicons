import React from 'react';

export const iconData = {
  "id": "SextoUnion",
  "name": "SextoUnion",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.60 7.55 L 8.57 12.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.64 8.52 A 2.60 6.52 111 0 0 5.41 5.78"
      }
    ],
    [
      "path",
      {
        "d": "M 17.91 15.21 L 21.73 12.38 L 4.82 13.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 21.00 L 8.56 14.94 L 2.01 4.20 L 16.66 20.36 L 21.21 6.50 L 11.29 2.81 L 21.40 12.43"
      }
    ],
    [
      "path",
      {
        "d": "M 21.02 18.09 L 21.10 11.75 L 3.69 14.54 L 13.40 19.26 L 10.87 17.60"
      }
    ]
  ]
};

export const SextoUnion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.60 7.55 L 8.57 12.73" />
      <path d="M 8.64 8.52 A 2.60 6.52 111 0 0 5.41 5.78" />
      <path d="M 17.91 15.21 L 21.73 12.38 L 4.82 13.96" />
      <path d="M 5.85 21.00 L 8.56 14.94 L 2.01 4.20 L 16.66 20.36 L 21.21 6.50 L 11.29 2.81 L 21.40 12.43" />
      <path d="M 21.02 18.09 L 21.10 11.75 L 3.69 14.54 L 13.40 19.26 L 10.87 17.60" />
      {children}
    </svg>
  );
});

export default SextoUnion;
