import React from 'react';

export const iconData = {
  "id": "PectoChip",
  "name": "PectoChip",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.65 6.09 L 19.35 6.09 L 19.35 17.91 L 4.65 17.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.65 6.09 L 8.14 2.60 L 22.84 2.60 L 19.35 6.09"
      }
    ],
    [
      "path",
      {
        "d": "M 19.35 6.09 L 22.84 2.60 L 22.84 14.42 L 19.35 17.91"
      }
    ]
  ]
};

export const PectoChip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.65 6.09 L 19.35 6.09 L 19.35 17.91 L 4.65 17.91 Z" />
      <path d="M 4.65 6.09 L 8.14 2.60 L 22.84 2.60 L 19.35 6.09" />
      <path d="M 19.35 6.09 L 22.84 2.60 L 22.84 14.42 L 19.35 17.91" />
      {children}
    </svg>
  );
});

export default PectoChip;
