import React from 'react';

export const iconData = {
  "id": "ScaroRhythm",
  "name": "ScaroRhythm",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.93 6.08 L 19.07 6.08 L 19.07 17.92 L 4.93 17.92 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 6.08 L 8.05 2.96 L 22.20 2.96 L 19.07 6.08"
      }
    ],
    [
      "path",
      {
        "d": "M 19.07 6.08 L 22.20 2.96 L 22.20 14.79 L 19.07 17.92"
      }
    ]
  ]
};

export const ScaroRhythm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.93 6.08 L 19.07 6.08 L 19.07 17.92 L 4.93 17.92 Z" />
      <path d="M 4.93 6.08 L 8.05 2.96 L 22.20 2.96 L 19.07 6.08" />
      <path d="M 19.07 6.08 L 22.20 2.96 L 22.20 14.79 L 19.07 17.92" />
      {children}
    </svg>
  );
});

export default ScaroRhythm;
