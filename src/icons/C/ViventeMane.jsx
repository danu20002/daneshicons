import React from 'react';

export const iconData = {
  "id": "ViventeMane",
  "name": "ViventeMane",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.48 16.36 L 11.96 20.66 L 4.48 16.29 L 4.52 7.64 L 12.04 3.34 L 19.52 7.71 Z"
      }
    ]
  ]
};

export const ViventeMane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.48 16.36 L 11.96 20.66 L 4.48 16.29 L 4.52 7.64 L 12.04 3.34 L 19.52 7.71 Z" />
      {children}
    </svg>
  );
});

export default ViventeMane;
