import React from 'react';

export const iconData = {
  "id": "RigoHavoc",
  "name": "RigoHavoc",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.67 22.19 L 9.73 16.83 L 1.81 15.67 L 7.17 9.73 L 8.33 1.81 L 14.27 7.17 L 22.19 8.33 L 16.83 14.27 Z"
      }
    ]
  ]
};

export const RigoHavoc = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.67 22.19 L 9.73 16.83 L 1.81 15.67 L 7.17 9.73 L 8.33 1.81 L 14.27 7.17 L 22.19 8.33 L 16.83 14.27 Z" />
      {children}
    </svg>
  );
});

export default RigoHavoc;
