import React from 'react';

export const iconData = {
  "id": "VulnereGap",
  "name": "VulnereGap",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.08 12.00 a 7.92 7.92 0 1 0 15.85 0 a 7.92 7.92 0 1 0 -15.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 12.00 a 4.93 4.93 0 1 1 9.86 0 a 4.93 4.93 0 1 1 -9.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.42 12.00 L 21.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.01 16.36 L 19.62 17.54"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 19.06 L 14.91 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 9.71 19.06 L 9.09 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 16.36 L 4.38 17.54"
      }
    ],
    [
      "path",
      {
        "d": "M 4.58 12.00 L 2.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 7.64 L 4.38 6.46"
      }
    ],
    [
      "path",
      {
        "d": "M 9.71 4.94 L 9.09 3.04"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 4.94 L 14.91 3.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.01 7.64 L 19.62 6.46"
      }
    ]
  ]
};

export const VulnereGap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.08 12.00 a 7.92 7.92 0 1 0 15.85 0 a 7.92 7.92 0 1 0 -15.85 0" />
      <path d="M 7.07 12.00 a 4.93 4.93 0 1 1 9.86 0 a 4.93 4.93 0 1 1 -9.86 0" />
      <path d="M 19.42 12.00 L 21.42 12.00" />
      <path d="M 18.01 16.36 L 19.62 17.54" />
      <path d="M 14.29 19.06 L 14.91 20.96" />
      <path d="M 9.71 19.06 L 9.09 20.96" />
      <path d="M 5.99 16.36 L 4.38 17.54" />
      <path d="M 4.58 12.00 L 2.58 12.00" />
      <path d="M 5.99 7.64 L 4.38 6.46" />
      <path d="M 9.71 4.94 L 9.09 3.04" />
      <path d="M 14.29 4.94 L 14.91 3.04" />
      <path d="M 18.01 7.64 L 19.62 6.46" />
      {children}
    </svg>
  );
});

export default VulnereGap;
