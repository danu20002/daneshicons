import React from 'react';

export const iconData = {
  "id": "VetroOutdoor",
  "name": "VetroOutdoor",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.33 3.89 L 15.85 4.38 L 20.11 9.33 L 19.62 15.85 L 14.67 20.11 L 8.15 19.62 L 3.89 14.67 L 4.38 8.15 Z"
      }
    ]
  ]
};

export const VetroOutdoor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.33 3.89 L 15.85 4.38 L 20.11 9.33 L 19.62 15.85 L 14.67 20.11 L 8.15 19.62 L 3.89 14.67 L 4.38 8.15 Z" />
      {children}
    </svg>
  );
});

export default VetroOutdoor;
