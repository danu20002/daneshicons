import React from 'react';

export const iconData = {
  "id": "SoloUnable",
  "name": "SoloUnable",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 12.00 a 7.05 7.05 0 1 0 14.09 0 a 7.05 7.05 0 1 0 -14.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 12.00 a 4.09 4.09 0 1 1 8.17 0 a 4.09 4.09 0 1 1 -8.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.55 12.00 L 20.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.08 17.12 L 17.33 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 10.54 18.38 L 10.10 20.33"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 14.84 L 4.30 15.71"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 9.16 L 4.30 8.29"
      }
    ],
    [
      "path",
      {
        "d": "M 10.54 5.62 L 10.10 3.67"
      }
    ],
    [
      "path",
      {
        "d": "M 16.08 6.88 L 17.33 5.32"
      }
    ]
  ]
};

export const SoloUnable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 12.00 a 7.05 7.05 0 1 0 14.09 0 a 7.05 7.05 0 1 0 -14.09 0" />
      <path d="M 7.91 12.00 a 4.09 4.09 0 1 1 8.17 0 a 4.09 4.09 0 1 1 -8.17 0" />
      <path d="M 18.55 12.00 L 20.55 12.00" />
      <path d="M 16.08 17.12 L 17.33 18.68" />
      <path d="M 10.54 18.38 L 10.10 20.33" />
      <path d="M 6.10 14.84 L 4.30 15.71" />
      <path d="M 6.10 9.16 L 4.30 8.29" />
      <path d="M 10.54 5.62 L 10.10 3.67" />
      <path d="M 16.08 6.88 L 17.33 5.32" />
      {children}
    </svg>
  );
});

export default SoloUnable;
