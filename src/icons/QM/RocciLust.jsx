import React from 'react';

export const iconData = {
  "id": "RocciLust",
  "name": "RocciLust",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 6.97 L 20.02 6.97 L 20.02 17.03 L 3.98 17.03 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 6.97 L 8.54 2.41 L 24.57 2.41 L 20.02 6.97"
      }
    ],
    [
      "path",
      {
        "d": "M 20.02 6.97 L 24.57 2.41 L 24.57 12.47 L 20.02 17.03"
      }
    ]
  ]
};

export const RocciLust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 6.97 L 20.02 6.97 L 20.02 17.03 L 3.98 17.03 Z" />
      <path d="M 3.98 6.97 L 8.54 2.41 L 24.57 2.41 L 20.02 6.97" />
      <path d="M 20.02 6.97 L 24.57 2.41 L 24.57 12.47 L 20.02 17.03" />
      {children}
    </svg>
  );
});

export default RocciLust;
