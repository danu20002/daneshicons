import React from 'react';

export const iconData = {
  "id": "VegetoDraft",
  "name": "VegetoDraft",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 17.44 L 11.89 16.57 L 2.83 17.02 L 8.09 9.62 L 12.24 1.54 L 16.01 9.81 Z"
      }
    ]
  ]
};

export const VegetoDraft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 17.44 L 11.89 16.57 L 2.83 17.02 L 8.09 9.62 L 12.24 1.54 L 16.01 9.81 Z" />
      {children}
    </svg>
  );
});

export default VegetoDraft;
