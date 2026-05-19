import React from 'react';

export const iconData = {
  "id": "MateriEnd",
  "name": "MateriEnd",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.95 20.94 L 11.21 15.30 L 6.23 19.10 L 8.93 13.45 L 2.85 11.92 L 8.95 10.50 L 6.36 4.80 L 11.28 8.68 L 14.12 3.10 L 14.14 9.36 L 20.28 8.11 L 15.40 12.03 L 20.20 16.05 L 14.09 14.67 Z"
      }
    ]
  ]
};

export const MateriEnd = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.95 20.94 L 11.21 15.30 L 6.23 19.10 L 8.93 13.45 L 2.85 11.92 L 8.95 10.50 L 6.36 4.80 L 11.28 8.68 L 14.12 3.10 L 14.14 9.36 L 20.28 8.11 L 15.40 12.03 L 20.20 16.05 L 14.09 14.67 Z" />
      {children}
    </svg>
  );
});

export default MateriEnd;
