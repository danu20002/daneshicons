import React from 'react';

export const iconData = {
  "id": "MegaPregnancy",
  "name": "MegaPregnancy",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.07 6.87 L 19.93 6.87 L 19.93 17.13 L 4.07 17.13 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 6.87 L 8.59 2.35 L 24.44 2.35 L 19.93 6.87"
      }
    ],
    [
      "path",
      {
        "d": "M 19.93 6.87 L 24.44 2.35 L 24.44 12.61 L 19.93 17.13"
      }
    ]
  ]
};

export const MegaPregnancy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.07 6.87 L 19.93 6.87 L 19.93 17.13 L 4.07 17.13 Z" />
      <path d="M 4.07 6.87 L 8.59 2.35 L 24.44 2.35 L 19.93 6.87" />
      <path d="M 19.93 6.87 L 24.44 2.35 L 24.44 12.61 L 19.93 17.13" />
      {children}
    </svg>
  );
});

export default MegaPregnancy;
