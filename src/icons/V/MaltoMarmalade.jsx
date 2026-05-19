import React from 'react';

export const iconData = {
  "id": "MaltoMarmalade",
  "name": "MaltoMarmalade",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 11.84 L 7.73 4.29 L 16.54 4.45 L 20.81 12.16 L 16.27 19.71 L 7.46 19.55 Z"
      }
    ]
  ]
};

export const MaltoMarmalade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 11.84 L 7.73 4.29 L 16.54 4.45 L 20.81 12.16 L 16.27 19.71 L 7.46 19.55 Z" />
      {children}
    </svg>
  );
});

export default MaltoMarmalade;
