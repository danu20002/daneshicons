import React from 'react';

export const iconData = {
  "id": "CentriLab",
  "name": "CentriLab",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 13.46 L 8.18 4.97 L 17.51 6.19 L 19.23 15.44 L 10.96 19.94 Z"
      }
    ]
  ]
};

export const CentriLab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 13.46 L 8.18 4.97 L 17.51 6.19 L 19.23 15.44 L 10.96 19.94 Z" />
      {children}
    </svg>
  );
});

export default CentriLab;
