import React from 'react';

export const iconData = {
  "id": "ScannoShark",
  "name": "ScannoShark",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.79 2.28 L 13.88 9.59 L 21.72 10.79 L 14.41 13.88 L 13.21 21.72 L 10.12 14.41 L 2.28 13.21 L 9.59 10.12 Z"
      }
    ]
  ]
};

export const ScannoShark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.79 2.28 L 13.88 9.59 L 21.72 10.79 L 14.41 13.88 L 13.21 21.72 L 10.12 14.41 L 2.28 13.21 L 9.59 10.12 Z" />
      {children}
    </svg>
  );
});

export default ScannoShark;
