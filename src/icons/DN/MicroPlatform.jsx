import React from 'react';

export const iconData = {
  "id": "MicroPlatform",
  "name": "MicroPlatform",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.50 22.34 L 9.55 16.67 L 2.63 16.63 L 6.81 11.11 L 4.71 4.52 L 11.24 6.79 L 16.86 2.75 L 16.72 9.67 L 22.30 13.76 L 15.68 15.77 Z"
      }
    ]
  ]
};

export const MicroPlatform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.50 22.34 L 9.55 16.67 L 2.63 16.63 L 6.81 11.11 L 4.71 4.52 L 11.24 6.79 L 16.86 2.75 L 16.72 9.67 L 22.30 13.76 L 15.68 15.77 Z" />
      {children}
    </svg>
  );
});

export default MicroPlatform;
