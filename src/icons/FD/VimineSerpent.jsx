import React from 'react';

export const iconData = {
  "id": "VimineSerpent",
  "name": "VimineSerpent",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.47 5.37 C 13.63 16.86, 9.53 6.70, 16.93 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 2.57 C 14.65 8.93, 6.45 4.03, 21.28 21.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 7.73 C 18.38 8.74, 10.12 11.57, 16.06 19.75"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 2.26 C 5.82 9.15, 18.11 10.20, 20.61 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 4.87 C 12.55 4.74, 15.06 14.10, 16.89 16.28"
      }
    ]
  ]
};

export const VimineSerpent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.47 5.37 C 13.63 16.86, 9.53 6.70, 16.93 18.73" />
      <path d="M 2.97 2.57 C 14.65 8.93, 6.45 4.03, 21.28 21.90" />
      <path d="M 4.10 7.73 C 18.38 8.74, 10.12 11.57, 16.06 19.75" />
      <path d="M 7.57 2.26 C 5.82 9.15, 18.11 10.20, 20.61 20.56" />
      <path d="M 3.00 4.87 C 12.55 4.74, 15.06 14.10, 16.89 16.28" />
      {children}
    </svg>
  );
});

export default VimineSerpent;
