import React from 'react';

export const iconData = {
  "id": "LensoRoost",
  "name": "LensoRoost",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 7.87 L 10.46 7.41 L 16.13 3.69 L 16.59 10.46 L 20.31 16.13 L 13.54 16.59 L 7.87 20.31 L 7.41 13.54 Z"
      }
    ]
  ]
};

export const LensoRoost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 7.87 L 10.46 7.41 L 16.13 3.69 L 16.59 10.46 L 20.31 16.13 L 13.54 16.59 L 7.87 20.31 L 7.41 13.54 Z" />
      {children}
    </svg>
  );
});

export default LensoRoost;
