import React from 'react';

export const iconData = {
  "id": "RhodoRoam",
  "name": "RhodoRoam",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.31 3.65 L 21.57 12.12 L 7.11 20.23 Z"
      }
    ]
  ]
};

export const RhodoRoam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.31 3.65 L 21.57 12.12 L 7.11 20.23 Z" />
      {children}
    </svg>
  );
});

export default RhodoRoam;
