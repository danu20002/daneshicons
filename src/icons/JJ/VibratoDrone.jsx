import React from 'react';

export const iconData = {
  "id": "VibratoDrone",
  "name": "VibratoDrone",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.08 3.55 L 11.85 8.36 L 15.20 3.25 L 14.47 9.32 L 20.45 8.08 L 15.64 11.85 L 20.75 15.20 L 14.68 14.47 L 15.92 20.45 L 12.15 15.64 L 8.80 20.75 L 9.53 14.68 L 3.55 15.92 L 8.36 12.15 L 3.25 8.80 L 9.32 9.53 Z"
      }
    ]
  ]
};

export const VibratoDrone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.08 3.55 L 11.85 8.36 L 15.20 3.25 L 14.47 9.32 L 20.45 8.08 L 15.64 11.85 L 20.75 15.20 L 14.68 14.47 L 15.92 20.45 L 12.15 15.64 L 8.80 20.75 L 9.53 14.68 L 3.55 15.92 L 8.36 12.15 L 3.25 8.80 L 9.32 9.53 Z" />
      {children}
    </svg>
  );
});

export default VibratoDrone;
