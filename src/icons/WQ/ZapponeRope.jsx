import React from 'react';

export const iconData = {
  "id": "ZapponeRope",
  "name": "ZapponeRope",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.64 12.00 a 2.36 2.36 0 1 0 4.72 0 a 2.36 2.36 0 1 0 -4.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 12.00 a 4.08 4.08 0 1 0 8.16 0 a 4.08 4.08 0 1 0 -8.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 12.00 a 5.30 5.30 0 1 0 10.60 0 a 5.30 5.30 0 1 0 -10.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 12.00 a 7.15 7.15 0 1 0 14.30 0 a 7.15 7.15 0 1 0 -14.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 12.00 a 8.66 8.66 0 1 0 17.33 0 a 8.66 8.66 0 1 0 -17.33 0"
      }
    ]
  ]
};

export const ZapponeRope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.64 12.00 a 2.36 2.36 0 1 0 4.72 0 a 2.36 2.36 0 1 0 -4.72 0" />
      <path d="M 7.92 12.00 a 4.08 4.08 0 1 0 8.16 0 a 4.08 4.08 0 1 0 -8.16 0" />
      <path d="M 6.70 12.00 a 5.30 5.30 0 1 0 10.60 0 a 5.30 5.30 0 1 0 -10.60 0" />
      <path d="M 4.85 12.00 a 7.15 7.15 0 1 0 14.30 0 a 7.15 7.15 0 1 0 -14.30 0" />
      <path d="M 3.34 12.00 a 8.66 8.66 0 1 0 17.33 0 a 8.66 8.66 0 1 0 -17.33 0" />
      {children}
    </svg>
  );
});

export default ZapponeRope;
