import React from 'react';

export const iconData = {
  "id": "VaporFlick",
  "name": "VaporFlick",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.91 3.62 C 12.03 6.05, 7.70 14.21, 18.51 20.80"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 5.25 C 6.52 18.65, 5.15 11.79, 21.86 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 2.98 C 12.03 8.28, 14.39 18.74, 14.95 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 3.00 C 18.42 9.22, 10.58 16.23, 14.51 14.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 5.38 C 4.04 16.00, 8.87 13.56, 21.07 14.81"
      }
    ]
  ]
};

export const VaporFlick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.91 3.62 C 12.03 6.05, 7.70 14.21, 18.51 20.80" />
      <path d="M 5.51 5.25 C 6.52 18.65, 5.15 11.79, 21.86 17.91" />
      <path d="M 7.74 2.98 C 12.03 8.28, 14.39 18.74, 14.95 18.13" />
      <path d="M 3.95 3.00 C 18.42 9.22, 10.58 16.23, 14.51 14.39" />
      <path d="M 7.10 5.38 C 4.04 16.00, 8.87 13.56, 21.07 14.81" />
      {children}
    </svg>
  );
});

export default VaporFlick;
