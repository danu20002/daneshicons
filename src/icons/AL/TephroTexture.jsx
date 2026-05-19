import React from 'react';

export const iconData = {
  "id": "TephroTexture",
  "name": "TephroTexture",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.37 12.00 a 7.63 7.63 0 1 0 15.26 0 a 7.63 7.63 0 1 0 -15.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 12.00 a 6.08 6.08 0 1 1 12.16 0 a 6.08 6.08 0 1 1 -12.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.13 12.00 L 21.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.45 17.58 L 17.69 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 18.95 L 9.97 20.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 15.09 L 3.77 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 8.91 L 3.77 8.04"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 5.05 L 9.97 3.10"
      }
    ],
    [
      "path",
      {
        "d": "M 16.45 6.42 L 17.69 4.86"
      }
    ]
  ]
};

export const TephroTexture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.37 12.00 a 7.63 7.63 0 1 0 15.26 0 a 7.63 7.63 0 1 0 -15.26 0" />
      <path d="M 5.92 12.00 a 6.08 6.08 0 1 1 12.16 0 a 6.08 6.08 0 1 1 -12.16 0" />
      <path d="M 19.13 12.00 L 21.13 12.00" />
      <path d="M 16.45 17.58 L 17.69 19.14" />
      <path d="M 10.41 18.95 L 9.97 20.90" />
      <path d="M 5.57 15.09 L 3.77 15.96" />
      <path d="M 5.57 8.91 L 3.77 8.04" />
      <path d="M 10.41 5.05 L 9.97 3.10" />
      <path d="M 16.45 6.42 L 17.69 4.86" />
      {children}
    </svg>
  );
});

export default TephroTexture;
