import React from 'react';

export const iconData = {
  "id": "DuctoChance",
  "name": "DuctoChance",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.01 15.23 L 5.20 17.33 L 10.79 3.44 Z"
      }
    ]
  ]
};

export const DuctoChance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.01 15.23 L 5.20 17.33 L 10.79 3.44 Z" />
      {children}
    </svg>
  );
});

export default DuctoChance;
