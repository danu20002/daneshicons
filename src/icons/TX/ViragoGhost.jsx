import React from 'react';

export const iconData = {
  "id": "ViragoGhost",
  "name": "ViragoGhost",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.12 12.00 Q 15.22 13.86 16.06 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 19.03 Q 12.00 15.72 7.94 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 19.03 Q 8.78 13.86 3.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.88 12.00 Q 8.78 10.14 7.94 4.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 4.97 Q 12.00 8.28 16.06 4.97"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 4.97 Q 15.22 10.14 20.12 12.00"
      }
    ]
  ]
};

export const ViragoGhost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.12 12.00 Q 15.22 13.86 16.06 19.03" />
      <path d="M 16.06 19.03 Q 12.00 15.72 7.94 19.03" />
      <path d="M 7.94 19.03 Q 8.78 13.86 3.88 12.00" />
      <path d="M 3.88 12.00 Q 8.78 10.14 7.94 4.97" />
      <path d="M 7.94 4.97 Q 12.00 8.28 16.06 4.97" />
      <path d="M 16.06 4.97 Q 15.22 10.14 20.12 12.00" />
      {children}
    </svg>
  );
});

export default ViragoGhost;
