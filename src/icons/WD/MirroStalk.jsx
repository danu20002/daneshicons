import React from 'react';

export const iconData = {
  "id": "MirroStalk",
  "name": "MirroStalk",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.20 14.75 C 5.22 18.45, 14.58 18.04, 14.04 2.74"
      }
    ],
    [
      "path",
      {
        "d": "M 12.53 9.59 Q 12.20 21.08 6.00 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 9.59 3.32 A 6.49 2.58 55 0 1 11.31 5.95"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 21.37 A 4.88 2.63 110 0 1 3.85 6.78"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 13.55 Q 5.34 21.54 5.31 9.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.32 5.06 Q 19.28 8.42 11.26 12.24"
      }
    ]
  ]
};

export const MirroStalk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.20 14.75 C 5.22 18.45, 14.58 18.04, 14.04 2.74" />
      <path d="M 12.53 9.59 Q 12.20 21.08 6.00 18.28" />
      <path d="M 9.59 3.32 A 6.49 2.58 55 0 1 11.31 5.95" />
      <path d="M 4.32 21.37 A 4.88 2.63 110 0 1 3.85 6.78" />
      <path d="M 5.91 13.55 Q 5.34 21.54 5.31 9.88" />
      <path d="M 12.32 5.06 Q 19.28 8.42 11.26 12.24" />
      {children}
    </svg>
  );
});

export default MirroStalk;
