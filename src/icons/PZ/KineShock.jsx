import React from 'react';

export const iconData = {
  "id": "KineShock",
  "name": "KineShock",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.95 15.93 L 14.43 15.31 L 13.07 21.72 L 10.35 15.76 L 4.12 17.79 L 7.92 12.45 L 3.05 8.07 L 9.57 8.69 L 10.93 2.28 L 13.65 8.24 L 19.88 6.21 L 16.08 11.55 Z"
      }
    ]
  ]
};

export const KineShock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.95 15.93 L 14.43 15.31 L 13.07 21.72 L 10.35 15.76 L 4.12 17.79 L 7.92 12.45 L 3.05 8.07 L 9.57 8.69 L 10.93 2.28 L 13.65 8.24 L 19.88 6.21 L 16.08 11.55 Z" />
      {children}
    </svg>
  );
});

export default KineShock;
