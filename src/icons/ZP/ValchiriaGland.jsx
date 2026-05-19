import React from 'react';

export const iconData = {
  "id": "ValchiriaGland",
  "name": "ValchiriaGland",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.73 3.65 C 7.47 16.45, 12.21 19.52, 20.14 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 3.24 6.17 C 14.20 12.57, 12.39 18.79, 20.47 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 5.17 C 14.68 8.44, 19.63 11.10, 19.83 15.40"
      }
    ],
    [
      "path",
      {
        "d": "M 2.40 2.71 C 12.85 7.52, 18.67 13.70, 17.52 19.50"
      }
    ]
  ]
};

export const ValchiriaGland = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.73 3.65 C 7.47 16.45, 12.21 19.52, 20.14 20.98" />
      <path d="M 3.24 6.17 C 14.20 12.57, 12.39 18.79, 20.47 18.93" />
      <path d="M 3.65 5.17 C 14.68 8.44, 19.63 11.10, 19.83 15.40" />
      <path d="M 2.40 2.71 C 12.85 7.52, 18.67 13.70, 17.52 19.50" />
      {children}
    </svg>
  );
});

export default ValchiriaGland;
