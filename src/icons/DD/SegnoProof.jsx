import React from 'react';

export const iconData = {
  "id": "SegnoProof",
  "name": "SegnoProof",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 20.20 L 8.64 20.66 L 9.05 19.21 L 19.43 3.41 L 15.29 8.64 L 21.48 18.97 L 16.93 6.07"
      }
    ],
    [
      "path",
      {
        "d": "M 11.31 2.92 C 12.78 18.76, 5.17 10.67, 21.53 14.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.33 4.56 Q 18.24 11.13 13.58 10.67"
      }
    ]
  ]
};

export const SegnoProof = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 20.20 L 8.64 20.66 L 9.05 19.21 L 19.43 3.41 L 15.29 8.64 L 21.48 18.97 L 16.93 6.07" />
      <path d="M 11.31 2.92 C 12.78 18.76, 5.17 10.67, 21.53 14.16" />
      <path d="M 15.33 4.56 Q 18.24 11.13 13.58 10.67" />
      {children}
    </svg>
  );
});

export default SegnoProof;
