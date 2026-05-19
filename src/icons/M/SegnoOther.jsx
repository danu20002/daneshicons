import React from 'react';

export const iconData = {
  "id": "SegnoOther",
  "name": "SegnoOther",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.54 20.18 Q 12.66 4.11 2.97 14.30"
      }
    ],
    [
      "path",
      {
        "d": "M 2.21 11.24 A 2.51 3.20 55 0 0 18.51 20.66"
      }
    ],
    [
      "path",
      {
        "d": "M 19.48 21.85 C 16.20 19.52, 12.86 17.74, 11.50 2.16"
      }
    ],
    [
      "path",
      {
        "d": "M 19.70 20.90 L 21.63 6.68 L 21.62 9.50 L 9.72 8.75 L 17.31 13.22 L 13.81 14.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.42 13.09 L 21.11 17.78 L 19.67 15.20"
      }
    ],
    [
      "path",
      {
        "d": "M 9.75 10.53 A 5.61 6.05 89 0 0 17.83 16.54"
      }
    ]
  ]
};

export const SegnoOther = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.54 20.18 Q 12.66 4.11 2.97 14.30" />
      <path d="M 2.21 11.24 A 2.51 3.20 55 0 0 18.51 20.66" />
      <path d="M 19.48 21.85 C 16.20 19.52, 12.86 17.74, 11.50 2.16" />
      <path d="M 19.70 20.90 L 21.63 6.68 L 21.62 9.50 L 9.72 8.75 L 17.31 13.22 L 13.81 14.76" />
      <path d="M 9.42 13.09 L 21.11 17.78 L 19.67 15.20" />
      <path d="M 9.75 10.53 A 5.61 6.05 89 0 0 17.83 16.54" />
      {children}
    </svg>
  );
});

export default SegnoOther;
