import React from 'react';

export const iconData = {
  "id": "PhotoTent",
  "name": "PhotoTent",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.04 9.88 C 9.53 8.68, 10.47 19.19, 19.15 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 6.34 C 12.92 4.50, 6.08 8.17, 16.78 17.19"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 8.50 C 4.80 10.05, 16.69 5.00, 16.37 17.85"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 8.37 C 7.00 11.24, 6.40 11.67, 18.15 19.01"
      }
    ]
  ]
};

export const PhotoTent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.04 9.88 C 9.53 8.68, 10.47 19.19, 19.15 19.12" />
      <path d="M 6.61 6.34 C 12.92 4.50, 6.08 8.17, 16.78 17.19" />
      <path d="M 4.12 8.50 C 4.80 10.05, 16.69 5.00, 16.37 17.85" />
      <path d="M 5.34 8.37 C 7.00 11.24, 6.40 11.67, 18.15 19.01" />
      {children}
    </svg>
  );
});

export default PhotoTent;
