import React from 'react';

export const iconData = {
  "id": "OzoProvide",
  "name": "OzoProvide",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.71 12.00 a 5.29 5.29 0 1 1 10.58 0 a 5.29 5.29 0 1 1 -10.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.53 12.00 L 21.53 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 16.43 L 19.71 17.60"
      }
    ],
    [
      "path",
      {
        "d": "M 14.33 19.16 L 14.94 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 9.67 19.16 L 9.06 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 16.43 L 4.29 17.60"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 12.00 L 2.47 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 7.57 L 4.29 6.40"
      }
    ],
    [
      "path",
      {
        "d": "M 9.67 4.84 L 9.06 2.94"
      }
    ],
    [
      "path",
      {
        "d": "M 14.33 4.84 L 14.94 2.94"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 7.57 L 19.71 6.40"
      }
    ]
  ]
};

export const OzoProvide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0" />
      <path d="M 6.71 12.00 a 5.29 5.29 0 1 1 10.58 0 a 5.29 5.29 0 1 1 -10.58 0" />
      <path d="M 19.53 12.00 L 21.53 12.00" />
      <path d="M 18.09 16.43 L 19.71 17.60" />
      <path d="M 14.33 19.16 L 14.94 21.06" />
      <path d="M 9.67 19.16 L 9.06 21.06" />
      <path d="M 5.91 16.43 L 4.29 17.60" />
      <path d="M 4.47 12.00 L 2.47 12.00" />
      <path d="M 5.91 7.57 L 4.29 6.40" />
      <path d="M 9.67 4.84 L 9.06 2.94" />
      <path d="M 14.33 4.84 L 14.94 2.94" />
      <path d="M 18.09 7.57 L 19.71 6.40" />
      {children}
    </svg>
  );
});

export default OzoProvide;
