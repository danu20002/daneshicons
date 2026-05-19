import React from 'react';

export const iconData = {
  "id": "TractoStatic",
  "name": "TractoStatic",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.86 9.86 L 10.86 9.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.45 6.45 L 13.68 10.25"
      }
    ],
    [
      "path",
      {
        "d": "M 17.42 10.71 L 14.18 13.06"
      }
    ],
    [
      "path",
      {
        "d": "M 14.90 16.75 L 11.67 14.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 16.23 L 9.61 12.42"
      }
    ]
  ]
};

export const TractoStatic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.86 9.86 L 10.86 9.86" />
      <path d="M 12.45 6.45 L 13.68 10.25" />
      <path d="M 17.42 10.71 L 14.18 13.06" />
      <path d="M 14.90 16.75 L 11.67 14.40" />
      <path d="M 8.38 16.23 L 9.61 12.42" />
      {children}
    </svg>
  );
});

export default TractoStatic;
