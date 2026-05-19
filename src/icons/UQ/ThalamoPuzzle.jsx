import React from 'react';

export const iconData = {
  "id": "ThalamoPuzzle",
  "name": "ThalamoPuzzle",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 7.62 L 13.59 7.62"
      }
    ],
    [
      "path",
      {
        "d": "M 15.42 8.35 L 16.66 12.16"
      }
    ],
    [
      "path",
      {
        "d": "M 16.53 14.13 L 13.29 16.48"
      }
    ],
    [
      "path",
      {
        "d": "M 11.38 16.96 L 8.14 14.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 12.94 L 8.32 9.13"
      }
    ]
  ]
};

export const ThalamoPuzzle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 7.62 L 13.59 7.62" />
      <path d="M 15.42 8.35 L 16.66 12.16" />
      <path d="M 16.53 14.13 L 13.29 16.48" />
      <path d="M 11.38 16.96 L 8.14 14.61" />
      <path d="M 7.09 12.94 L 8.32 9.13" />
      {children}
    </svg>
  );
});

export default ThalamoPuzzle;
