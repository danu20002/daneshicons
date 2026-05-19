import React from 'react';

export const iconData = {
  "id": "MiniOxygen",
  "name": "MiniOxygen",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.57 16.51 L 13.89 17.26 L 7.49 21.57 L 6.74 13.89 L 2.43 7.49 L 10.11 6.74 L 16.51 2.43 L 17.26 10.11 Z"
      }
    ]
  ]
};

export const MiniOxygen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.57 16.51 L 13.89 17.26 L 7.49 21.57 L 6.74 13.89 L 2.43 7.49 L 10.11 6.74 L 16.51 2.43 L 17.26 10.11 Z" />
      {children}
    </svg>
  );
});

export default MiniOxygen;
