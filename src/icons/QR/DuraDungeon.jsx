import React from 'react';

export const iconData = {
  "id": "DuraDungeon",
  "name": "DuraDungeon",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.59 6.64 L 17.79 11.36 L 21.55 15.37 L 16.11 16.13 L 15.32 21.57 L 11.33 17.79 L 6.59 20.56 L 7.06 15.09 L 1.93 13.11 L 6.51 10.06 L 4.86 4.82 L 10.09 6.50 L 13.16 1.94 L 15.11 7.08 Z"
      }
    ]
  ]
};

export const DuraDungeon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.59 6.64 L 17.79 11.36 L 21.55 15.37 L 16.11 16.13 L 15.32 21.57 L 11.33 17.79 L 6.59 20.56 L 7.06 15.09 L 1.93 13.11 L 6.51 10.06 L 4.86 4.82 L 10.09 6.50 L 13.16 1.94 L 15.11 7.08 Z" />
      {children}
    </svg>
  );
});

export default DuraDungeon;
