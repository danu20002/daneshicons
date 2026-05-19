import React from 'react';

export const iconData = {
  "id": "SegnoIntimate",
  "name": "SegnoIntimate",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 12.00 a 7.57 7.57 0 1 0 15.13 0 a 7.57 7.57 0 1 0 -15.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 12.00 a 5.94 5.94 0 1 1 11.88 0 a 5.94 5.94 0 1 1 -11.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.07 12.00 L 21.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.72 16.15 L 19.33 17.33"
      }
    ],
    [
      "path",
      {
        "d": "M 14.18 18.72 L 14.80 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 18.72 L 9.20 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 6.28 16.15 L 4.67 17.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 12.00 L 2.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.28 7.85 L 4.67 6.67"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 5.28 L 9.20 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 14.18 5.28 L 14.80 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 17.72 7.85 L 19.33 6.67"
      }
    ]
  ]
};

export const SegnoIntimate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 12.00 a 7.57 7.57 0 1 0 15.13 0 a 7.57 7.57 0 1 0 -15.13 0" />
      <path d="M 6.06 12.00 a 5.94 5.94 0 1 1 11.88 0 a 5.94 5.94 0 1 1 -11.88 0" />
      <path d="M 19.07 12.00 L 21.07 12.00" />
      <path d="M 17.72 16.15 L 19.33 17.33" />
      <path d="M 14.18 18.72 L 14.80 20.62" />
      <path d="M 9.82 18.72 L 9.20 20.62" />
      <path d="M 6.28 16.15 L 4.67 17.33" />
      <path d="M 4.93 12.00 L 2.93 12.00" />
      <path d="M 6.28 7.85 L 4.67 6.67" />
      <path d="M 9.82 5.28 L 9.20 3.38" />
      <path d="M 14.18 5.28 L 14.80 3.38" />
      <path d="M 17.72 7.85 L 19.33 6.67" />
      {children}
    </svg>
  );
});

export default SegnoIntimate;
