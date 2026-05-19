import React from 'react';

export const iconData = {
  "id": "StereoUphold",
  "name": "StereoUphold",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.46 12.00 a 7.54 7.54 0 1 0 15.09 0 a 7.54 7.54 0 1 0 -15.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.83 12.00 a 5.17 5.17 0 1 1 10.34 0 a 5.17 5.17 0 1 1 -10.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 12.00 L 21.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 16.14 L 19.32 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 14.18 18.70 L 14.79 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 18.70 L 9.21 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 16.14 L 4.68 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 12.00 L 2.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 7.86 L 4.68 6.68"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 5.30 L 9.21 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 14.18 5.30 L 14.79 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 7.86 L 19.32 6.68"
      }
    ]
  ]
};

export const StereoUphold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.46 12.00 a 7.54 7.54 0 1 0 15.09 0 a 7.54 7.54 0 1 0 -15.09 0" />
      <path d="M 6.83 12.00 a 5.17 5.17 0 1 1 10.34 0 a 5.17 5.17 0 1 1 -10.34 0" />
      <path d="M 19.04 12.00 L 21.04 12.00" />
      <path d="M 17.70 16.14 L 19.32 17.32" />
      <path d="M 14.18 18.70 L 14.79 20.60" />
      <path d="M 9.82 18.70 L 9.21 20.60" />
      <path d="M 6.30 16.14 L 4.68 17.32" />
      <path d="M 4.96 12.00 L 2.96 12.00" />
      <path d="M 6.30 7.86 L 4.68 6.68" />
      <path d="M 9.82 5.30 L 9.21 3.40" />
      <path d="M 14.18 5.30 L 14.79 3.40" />
      <path d="M 17.70 7.86 L 19.32 6.68" />
      {children}
    </svg>
  );
});

export default StereoUphold;
