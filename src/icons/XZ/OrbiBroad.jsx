import React from 'react';

export const iconData = {
  "id": "OrbiBroad",
  "name": "OrbiBroad",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.02 1.47 L 14.08 9.65 L 22.33 9.71 L 14.87 13.25 L 17.36 21.11 L 11.70 15.12 L 4.99 19.92 L 8.94 12.68 L 2.30 7.78 L 10.41 9.30 Z"
      }
    ]
  ]
};

export const OrbiBroad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.02 1.47 L 14.08 9.65 L 22.33 9.71 L 14.87 13.25 L 17.36 21.11 L 11.70 15.12 L 4.99 19.92 L 8.94 12.68 L 2.30 7.78 L 10.41 9.30 Z" />
      {children}
    </svg>
  );
});

export default OrbiBroad;
