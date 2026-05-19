import React from 'react';

export const iconData = {
  "id": "ScandiReflect",
  "name": "ScandiReflect",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.02 3.84 L 16.29 8.64 L 20.88 10.05 L 17.30 13.26 L 19.06 17.73 L 14.32 16.93 L 11.92 21.09 L 9.59 16.89 L 4.84 17.61 L 6.68 13.17 L 3.15 9.90 L 7.77 8.57 L 8.13 3.77 L 12.05 6.55 Z"
      }
    ]
  ]
};

export const ScandiReflect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.02 3.84 L 16.29 8.64 L 20.88 10.05 L 17.30 13.26 L 19.06 17.73 L 14.32 16.93 L 11.92 21.09 L 9.59 16.89 L 4.84 17.61 L 6.68 13.17 L 3.15 9.90 L 7.77 8.57 L 8.13 3.77 L 12.05 6.55 Z" />
      {children}
    </svg>
  );
});

export default ScandiReflect;
