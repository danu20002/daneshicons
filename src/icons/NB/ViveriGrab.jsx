import React from 'react';

export const iconData = {
  "id": "ViveriGrab",
  "name": "ViveriGrab",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.43 11.87 L 10.46 9.25 L 17.40 2.92 L 15.15 12.04 L 17.17 21.22 L 10.39 14.71 Z"
      }
    ]
  ]
};

export const ViveriGrab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.43 11.87 L 10.46 9.25 L 17.40 2.92 L 15.15 12.04 L 17.17 21.22 L 10.39 14.71 Z" />
      {children}
    </svg>
  );
});

export default ViveriGrab;
