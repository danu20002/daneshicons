import React from 'react';

export const iconData = {
  "id": "MembraPan",
  "name": "MembraPan",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 5.28 L 19.04 5.28 L 19.04 18.72 L 4.96 18.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 5.28 L 8.34 1.91 L 22.42 1.91 L 19.04 5.28"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 5.28 L 22.42 1.91 L 22.42 15.34 L 19.04 18.72"
      }
    ]
  ]
};

export const MembraPan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 5.28 L 19.04 5.28 L 19.04 18.72 L 4.96 18.72 Z" />
      <path d="M 4.96 5.28 L 8.34 1.91 L 22.42 1.91 L 19.04 5.28" />
      <path d="M 19.04 5.28 L 22.42 1.91 L 22.42 15.34 L 19.04 18.72" />
      {children}
    </svg>
  );
});

export default MembraPan;
