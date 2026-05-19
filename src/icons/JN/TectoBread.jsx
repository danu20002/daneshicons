import React from 'react';

export const iconData = {
  "id": "TectoBread",
  "name": "TectoBread",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 7.32 C 17.68 19.23, 17.46 4.91, 19.80 18.79"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 8.86 C 17.53 14.41, 16.01 12.78, 21.62 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 5.85 C 19.71 10.57, 4.14 17.75, 17.64 14.27"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 4.77 C 19.36 17.01, 5.57 19.05, 19.37 21.01"
      }
    ]
  ]
};

export const TectoBread = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 7.32 C 17.68 19.23, 17.46 4.91, 19.80 18.79" />
      <path d="M 5.81 8.86 C 17.53 14.41, 16.01 12.78, 21.62 18.03" />
      <path d="M 3.37 5.85 C 19.71 10.57, 4.14 17.75, 17.64 14.27" />
      <path d="M 3.44 4.77 C 19.36 17.01, 5.57 19.05, 19.37 21.01" />
      {children}
    </svg>
  );
});

export default TectoBread;
