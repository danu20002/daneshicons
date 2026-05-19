import React from 'react';

export const iconData = {
  "id": "KaryoPorcupine",
  "name": "KaryoPorcupine",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.36 22.18 L 10.70 15.08 L 3.05 17.39 L 8.67 11.71 L 4.11 5.15 L 11.24 8.74 L 16.07 2.38 L 14.87 10.27 L 22.41 12.90 L 14.53 14.19 Z"
      }
    ]
  ]
};

export const KaryoPorcupine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.36 22.18 L 10.70 15.08 L 3.05 17.39 L 8.67 11.71 L 4.11 5.15 L 11.24 8.74 L 16.07 2.38 L 14.87 10.27 L 22.41 12.90 L 14.53 14.19 Z" />
      {children}
    </svg>
  );
});

export default KaryoPorcupine;
