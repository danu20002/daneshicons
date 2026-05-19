import React from 'react';

export const iconData = {
  "id": "VivajoHighway",
  "name": "VivajoHighway",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.75 15.02 L 7.22 9.40 L 8.98 1.75 L 14.60 7.22 L 22.25 8.98 L 16.78 14.60 L 15.02 22.25 L 9.40 16.78 Z"
      }
    ]
  ]
};

export const VivajoHighway = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.75 15.02 L 7.22 9.40 L 8.98 1.75 L 14.60 7.22 L 22.25 8.98 L 16.78 14.60 L 15.02 22.25 L 9.40 16.78 Z" />
      {children}
    </svg>
  );
});

export default VivajoHighway;
