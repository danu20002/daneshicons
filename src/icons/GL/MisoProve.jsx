import React from 'react';

export const iconData = {
  "id": "MisoProve",
  "name": "MisoProve",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 19.83 L 8.30 12.13 L 4.17 4.71 L 11.87 8.30 L 19.29 4.17 L 15.70 11.87 L 19.83 19.29 L 12.13 15.70 Z"
      }
    ]
  ]
};

export const MisoProve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 19.83 L 8.30 12.13 L 4.17 4.71 L 11.87 8.30 L 19.29 4.17 L 15.70 11.87 L 19.83 19.29 L 12.13 15.70 Z" />
      {children}
    </svg>
  );
});

export default MisoProve;
