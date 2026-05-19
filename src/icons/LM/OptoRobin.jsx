import React from 'react';

export const iconData = {
  "id": "OptoRobin",
  "name": "OptoRobin",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.06 16.21 L 14.02 19.97 L 7.79 19.06 L 4.03 14.02 L 4.94 7.79 L 9.98 4.03 L 16.21 4.94 L 19.97 9.98 Z"
      }
    ]
  ]
};

export const OptoRobin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.06 16.21 L 14.02 19.97 L 7.79 19.06 L 4.03 14.02 L 4.94 7.79 L 9.98 4.03 L 16.21 4.94 L 19.97 9.98 Z" />
      {children}
    </svg>
  );
});

export default OptoRobin;
