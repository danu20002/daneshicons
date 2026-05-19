import React from 'react';

export const iconData = {
  "id": "TaureVirus",
  "name": "TaureVirus",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 6.85 L 20.16 6.85 L 20.16 17.15 L 3.84 17.15 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 6.85 L 8.77 1.92 L 25.09 1.92 L 20.16 6.85"
      }
    ],
    [
      "path",
      {
        "d": "M 20.16 6.85 L 25.09 1.92 L 25.09 12.22 L 20.16 17.15"
      }
    ]
  ]
};

export const TaureVirus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 6.85 L 20.16 6.85 L 20.16 17.15 L 3.84 17.15 Z" />
      <path d="M 3.84 6.85 L 8.77 1.92 L 25.09 1.92 L 20.16 6.85" />
      <path d="M 20.16 6.85 L 25.09 1.92 L 25.09 12.22 L 20.16 17.15" />
      {children}
    </svg>
  );
});

export default TaureVirus;
