import React from 'react';

export const iconData = {
  "id": "VampiroUnknown",
  "name": "VampiroUnknown",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.45 22.52 L 7.99 16.21 L 1.61 15.05 L 6.35 10.63 L 4.16 4.53 L 10.36 6.42 L 14.55 1.48 L 16.01 7.79 L 22.39 8.95 L 17.65 13.37 L 19.84 19.47 L 13.64 17.58 Z"
      }
    ]
  ]
};

export const VampiroUnknown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.45 22.52 L 7.99 16.21 L 1.61 15.05 L 6.35 10.63 L 4.16 4.53 L 10.36 6.42 L 14.55 1.48 L 16.01 7.79 L 22.39 8.95 L 17.65 13.37 L 19.84 19.47 L 13.64 17.58 Z" />
      {children}
    </svg>
  );
});

export default VampiroUnknown;
