import React from 'react';

export const iconData = {
  "id": "SensoDescend",
  "name": "SensoDescend",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.65 7.04 A 4.76 5.73 128 0 1 12.43 8.12"
      }
    ],
    [
      "path",
      {
        "d": "M 21.91 8.41 C 5.45 18.31, 2.08 3.30, 11.76 7.28"
      }
    ],
    [
      "path",
      {
        "d": "M 17.15 10.54 L 12.40 11.58 L 18.03 7.49 L 14.92 21.13 L 6.21 15.48 L 15.63 12.57 L 4.75 12.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.21 15.45 Q 12.82 6.46 21.71 7.94"
      }
    ]
  ]
};

export const SensoDescend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.65 7.04 A 4.76 5.73 128 0 1 12.43 8.12" />
      <path d="M 21.91 8.41 C 5.45 18.31, 2.08 3.30, 11.76 7.28" />
      <path d="M 17.15 10.54 L 12.40 11.58 L 18.03 7.49 L 14.92 21.13 L 6.21 15.48 L 15.63 12.57 L 4.75 12.14" />
      <path d="M 16.21 15.45 Q 12.82 6.46 21.71 7.94" />
      {children}
    </svg>
  );
});

export default SensoDescend;
