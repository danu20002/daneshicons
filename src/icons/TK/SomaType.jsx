import React from 'react';

export const iconData = {
  "id": "SomaType",
  "name": "SomaType",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.02 6.57 L 19.98 6.57 L 19.98 17.43 L 4.02 17.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 6.57 L 8.69 1.90 L 24.65 1.90 L 19.98 6.57"
      }
    ],
    [
      "path",
      {
        "d": "M 19.98 6.57 L 24.65 1.90 L 24.65 12.76 L 19.98 17.43"
      }
    ]
  ]
};

export const SomaType = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.02 6.57 L 19.98 6.57 L 19.98 17.43 L 4.02 17.43 Z" />
      <path d="M 4.02 6.57 L 8.69 1.90 L 24.65 1.90 L 19.98 6.57" />
      <path d="M 19.98 6.57 L 24.65 1.90 L 24.65 12.76 L 19.98 17.43" />
      {children}
    </svg>
  );
});

export default SomaType;
