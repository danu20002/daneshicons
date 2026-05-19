import React from 'react';

export const iconData = {
  "id": "PhylloLake",
  "name": "PhylloLake",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.43 5.25 L 19.73 9.68 L 19.42 15.19 L 15.63 19.21 L 10.14 19.86 L 5.53 16.83 L 3.94 11.54 L 6.12 6.46 L 11.06 3.98 Z"
      }
    ]
  ]
};

export const PhylloLake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.43 5.25 L 19.73 9.68 L 19.42 15.19 L 15.63 19.21 L 10.14 19.86 L 5.53 16.83 L 3.94 11.54 L 6.12 6.46 L 11.06 3.98 Z" />
      {children}
    </svg>
  );
});

export default PhylloLake;
