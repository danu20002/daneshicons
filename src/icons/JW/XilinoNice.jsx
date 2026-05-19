import React from 'react';

export const iconData = {
  "id": "XilinoNice",
  "name": "XilinoNice",
  "category": "JW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 12.00 a 8.36 8.36 0 1 0 16.71 0 a 8.36 8.36 0 1 0 -16.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 6.99 a 6.68 2.0054006410762666 0 1 0 13.37 0 a 6.68 2.0054006410762666 0 1 0 -13.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 10.33 a 8.19 2.4561041502435623 0 1 0 16.37 0 a 8.19 2.4561041502435623 0 1 0 -16.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 13.67 a 8.19 2.4561041502435623 0 1 0 16.37 0 a 8.19 2.4561041502435623 0 1 0 -16.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 17.01 a 6.68 2.0054006410762666 0 1 0 13.37 0 a 6.68 2.0054006410762666 0 1 0 -13.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.64 A 2 2 0 0 0 12.00 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.64 A 2 2 0 0 1 12.00 20.36"
      }
    ]
  ]
};

export const XilinoNice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 12.00 a 8.36 8.36 0 1 0 16.71 0 a 8.36 8.36 0 1 0 -16.71 0" />
      <path d="M 5.32 6.99 a 6.68 2.0054006410762666 0 1 0 13.37 0 a 6.68 2.0054006410762666 0 1 0 -13.37 0" />
      <path d="M 3.81 10.33 a 8.19 2.4561041502435623 0 1 0 16.37 0 a 8.19 2.4561041502435623 0 1 0 -16.37 0" />
      <path d="M 3.81 13.67 a 8.19 2.4561041502435623 0 1 0 16.37 0 a 8.19 2.4561041502435623 0 1 0 -16.37 0" />
      <path d="M 5.32 17.01 a 6.68 2.0054006410762666 0 1 0 13.37 0 a 6.68 2.0054006410762666 0 1 0 -13.37 0" />
      <path d="M 12.00 3.64 A 2 2 0 0 0 12.00 20.36" />
      <path d="M 12.00 3.64 A 2 2 0 0 1 12.00 20.36" />
      {children}
    </svg>
  );
});

export default XilinoNice;
