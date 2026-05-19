import React from 'react';

export const iconData = {
  "id": "TrimeroLinger",
  "name": "TrimeroLinger",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.77 12.01 Q 17.95 12.21 10.72 16.01"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 8.89 C 14.12 20.94, 18.39 14.46, 6.92 9.79"
      }
    ],
    [
      "path",
      {
        "d": "M 21.26 20.01 L 20.40 20.38 L 12.19 15.72 L 2.24 7.60 L 2.92 13.68 L 7.56 2.64"
      }
    ]
  ]
};

export const TrimeroLinger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.77 12.01 Q 17.95 12.21 10.72 16.01" />
      <path d="M 6.33 8.89 C 14.12 20.94, 18.39 14.46, 6.92 9.79" />
      <path d="M 21.26 20.01 L 20.40 20.38 L 12.19 15.72 L 2.24 7.60 L 2.92 13.68 L 7.56 2.64" />
      {children}
    </svg>
  );
});

export default TrimeroLinger;
