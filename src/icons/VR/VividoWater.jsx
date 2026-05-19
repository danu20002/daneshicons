import React from 'react';

export const iconData = {
  "id": "VividoWater",
  "name": "VividoWater",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.65 20.94 L 4.94 6.36 L 20.42 8.70 Z"
      }
    ]
  ]
};

export const VividoWater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.65 20.94 L 4.94 6.36 L 20.42 8.70 Z" />
      {children}
    </svg>
  );
});

export default VividoWater;
