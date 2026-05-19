import React from 'react';

export const iconData = {
  "id": "IonoTriangle",
  "name": "IonoTriangle",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.75 12.00 a 7.25 7.25 0 1 0 14.50 0 a 7.25 7.25 0 1 0 -14.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 12.00 a 4.99 4.99 0 1 1 9.98 0 a 4.99 4.99 0 1 1 -9.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.75 12.00 L 20.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 15.97 L 19.08 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 14.09 18.42 L 14.70 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 9.91 18.42 L 9.30 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 15.97 L 4.92 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 12.00 L 3.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 8.03 L 4.92 6.86"
      }
    ],
    [
      "path",
      {
        "d": "M 9.91 5.58 L 9.30 3.68"
      }
    ],
    [
      "path",
      {
        "d": "M 14.09 5.58 L 14.70 3.68"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 8.03 L 19.08 6.86"
      }
    ]
  ]
};

export const IonoTriangle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.75 12.00 a 7.25 7.25 0 1 0 14.50 0 a 7.25 7.25 0 1 0 -14.50 0" />
      <path d="M 7.01 12.00 a 4.99 4.99 0 1 1 9.98 0 a 4.99 4.99 0 1 1 -9.98 0" />
      <path d="M 18.75 12.00 L 20.75 12.00" />
      <path d="M 17.46 15.97 L 19.08 17.14" />
      <path d="M 14.09 18.42 L 14.70 20.32" />
      <path d="M 9.91 18.42 L 9.30 20.32" />
      <path d="M 6.54 15.97 L 4.92 17.14" />
      <path d="M 5.25 12.00 L 3.25 12.00" />
      <path d="M 6.54 8.03 L 4.92 6.86" />
      <path d="M 9.91 5.58 L 9.30 3.68" />
      <path d="M 14.09 5.58 L 14.70 3.68" />
      <path d="M 17.46 8.03 L 19.08 6.86" />
      {children}
    </svg>
  );
});

export default IonoTriangle;
