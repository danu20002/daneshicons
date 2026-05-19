import React from 'react';

export const iconData = {
  "id": "TheoJuice",
  "name": "TheoJuice",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.79 5.38 C 11.83 14.31, 5.41 18.77, 14.27 19.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 3.24 C 5.28 18.13, 17.19 5.65, 18.51 15.28"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 6.89 C 11.03 5.77, 4.48 19.91, 20.87 14.50"
      }
    ],
    [
      "path",
      {
        "d": "M 5.53 4.71 C 19.09 15.92, 16.87 13.69, 21.01 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 5.85 C 12.44 13.63, 6.55 17.92, 14.60 15.39"
      }
    ]
  ]
};

export const TheoJuice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.79 5.38 C 11.83 14.31, 5.41 18.77, 14.27 19.28" />
      <path d="M 5.44 3.24 C 5.28 18.13, 17.19 5.65, 18.51 15.28" />
      <path d="M 4.08 6.89 C 11.03 5.77, 4.48 19.91, 20.87 14.50" />
      <path d="M 5.53 4.71 C 19.09 15.92, 16.87 13.69, 21.01 17.40" />
      <path d="M 5.23 5.85 C 12.44 13.63, 6.55 17.92, 14.60 15.39" />
      {children}
    </svg>
  );
});

export default TheoJuice;
