import React from 'react';

export const iconData = {
  "id": "VampiroGrowl",
  "name": "VampiroGrowl",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.62 3.11 L 20.96 10.79 L 15.92 20.14 L 5.47 18.24 L 4.04 7.71 Z"
      }
    ]
  ]
};

export const VampiroGrowl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.62 3.11 L 20.96 10.79 L 15.92 20.14 L 5.47 18.24 L 4.04 7.71 Z" />
      {children}
    </svg>
  );
});

export default VampiroGrowl;
