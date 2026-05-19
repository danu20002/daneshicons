import React from 'react';

export const iconData = {
  "id": "MagniFoil",
  "name": "MagniFoil",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.96 2.26 L 14.41 10.02 L 21.74 12.96 L 13.98 14.41 L 11.04 21.74 L 9.59 13.98 L 2.26 11.04 L 10.02 9.59 Z"
      }
    ]
  ]
};

export const MagniFoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.96 2.26 L 14.41 10.02 L 21.74 12.96 L 13.98 14.41 L 11.04 21.74 L 9.59 13.98 L 2.26 11.04 L 10.02 9.59 Z" />
      {children}
    </svg>
  );
});

export default MagniFoil;
