import React from 'react';

export const iconData = {
  "id": "VolumeFish",
  "name": "VolumeFish",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.89 6.57 C 21.85 7.52, 5.08 19.01, 2.20 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 8.02 10.46 L 2.86 16.79 L 16.04 20.60 L 8.21 15.41 L 18.60 10.77 L 15.16 11.99"
      }
    ],
    [
      "path",
      {
        "d": "M 11.53 4.35 L 19.22 5.68 L 14.95 21.80 L 3.09 17.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.87 5.09 L 10.79 15.23 L 7.45 3.68 L 18.63 9.57"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 20.41 A 2.57 5.77 148 0 1 19.85 21.71"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 3.49 C 5.13 4.40, 8.96 2.39, 17.35 5.54"
      }
    ]
  ]
};

export const VolumeFish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.89 6.57 C 21.85 7.52, 5.08 19.01, 2.20 18.96" />
      <path d="M 8.02 10.46 L 2.86 16.79 L 16.04 20.60 L 8.21 15.41 L 18.60 10.77 L 15.16 11.99" />
      <path d="M 11.53 4.35 L 19.22 5.68 L 14.95 21.80 L 3.09 17.88" />
      <path d="M 12.87 5.09 L 10.79 15.23 L 7.45 3.68 L 18.63 9.57" />
      <path d="M 2.25 20.41 A 2.57 5.77 148 0 1 19.85 21.71" />
      <path d="M 6.77 3.49 C 5.13 4.40, 8.96 2.39, 17.35 5.54" />
      {children}
    </svg>
  );
});

export default VolumeFish;
