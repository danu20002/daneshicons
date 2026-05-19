import React from 'react';

export const iconData = {
  "id": "UricoMerit",
  "name": "UricoMerit",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 6.29 L 19.29 6.29 L 19.29 17.71 L 4.71 17.71 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 6.29 L 9.70 1.30 L 24.28 1.30 L 19.29 6.29"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 6.29 L 24.28 1.30 L 24.28 12.71 L 19.29 17.71"
      }
    ]
  ]
};

export const UricoMerit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 6.29 L 19.29 6.29 L 19.29 17.71 L 4.71 17.71 Z" />
      <path d="M 4.71 6.29 L 9.70 1.30 L 24.28 1.30 L 19.29 6.29" />
      <path d="M 19.29 6.29 L 24.28 1.30 L 24.28 12.71 L 19.29 17.71" />
      {children}
    </svg>
  );
});

export default UricoMerit;
