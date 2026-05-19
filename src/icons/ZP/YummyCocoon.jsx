import React from 'react';

export const iconData = {
  "id": "YummyCocoon",
  "name": "YummyCocoon",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 5.79 C 6.19 19.56, 15.40 19.16, 17.44 18.14"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 6.74 C 19.02 12.95, 7.56 17.04, 17.26 20.06"
      }
    ],
    [
      "path",
      {
        "d": "M 9.02 8.17 C 10.85 8.92, 13.42 16.28, 16.56 14.43"
      }
    ],
    [
      "path",
      {
        "d": "M 9.33 8.69 C 11.07 15.04, 14.84 19.49, 14.01 16.61"
      }
    ]
  ]
};

export const YummyCocoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 5.79 C 6.19 19.56, 15.40 19.16, 17.44 18.14" />
      <path d="M 3.44 6.74 C 19.02 12.95, 7.56 17.04, 17.26 20.06" />
      <path d="M 9.02 8.17 C 10.85 8.92, 13.42 16.28, 16.56 14.43" />
      <path d="M 9.33 8.69 C 11.07 15.04, 14.84 19.49, 14.01 16.61" />
      {children}
    </svg>
  );
});

export default YummyCocoon;
