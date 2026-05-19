import React from 'react';

export const iconData = {
  "id": "RedoxDino",
  "name": "RedoxDino",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.18 9.77 C 4.16 19.66, 11.86 13.78, 16.39 15.37"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 7.94 C 11.33 13.99, 5.08 15.04, 14.00 19.36"
      }
    ],
    [
      "path",
      {
        "d": "M 2.18 2.01 C 18.90 6.18, 12.10 5.20, 18.34 14.60"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 8.36 C 13.54 7.07, 17.69 15.34, 17.40 14.86"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 5.71 C 14.59 7.89, 6.83 17.70, 21.20 14.49"
      }
    ]
  ]
};

export const RedoxDino = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.18 9.77 C 4.16 19.66, 11.86 13.78, 16.39 15.37" />
      <path d="M 3.61 7.94 C 11.33 13.99, 5.08 15.04, 14.00 19.36" />
      <path d="M 2.18 2.01 C 18.90 6.18, 12.10 5.20, 18.34 14.60" />
      <path d="M 4.61 8.36 C 13.54 7.07, 17.69 15.34, 17.40 14.86" />
      <path d="M 3.41 5.71 C 14.59 7.89, 6.83 17.70, 21.20 14.49" />
      {children}
    </svg>
  );
});

export default RedoxDino;
