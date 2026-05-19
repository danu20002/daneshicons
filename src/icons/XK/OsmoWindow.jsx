import React from 'react';

export const iconData = {
  "id": "OsmoWindow",
  "name": "OsmoWindow",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.38 4.26 C 18.58 14.14, 17.67 17.07, 20.79 21.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 3.59 C 17.87 10.87, 18.77 16.35, 17.17 21.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.79 4.45 C 6.41 9.89, 4.60 4.17, 21.31 17.20"
      }
    ]
  ]
};

export const OsmoWindow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.38 4.26 C 18.58 14.14, 17.67 17.07, 20.79 21.87" />
      <path d="M 7.15 3.59 C 17.87 10.87, 18.77 16.35, 17.17 21.62" />
      <path d="M 5.79 4.45 C 6.41 9.89, 4.60 4.17, 21.31 17.20" />
      {children}
    </svg>
  );
});

export default OsmoWindow;
