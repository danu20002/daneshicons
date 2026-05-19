import React from 'react';

export const iconData = {
  "id": "VacuoChest",
  "name": "VacuoChest",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.26 5.59 L 14.19 2.96 L 20.92 9.37 L 18.74 18.41 L 9.81 21.04 L 3.08 14.63 Z"
      }
    ]
  ]
};

export const VacuoChest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.26 5.59 L 14.19 2.96 L 20.92 9.37 L 18.74 18.41 L 9.81 21.04 L 3.08 14.63 Z" />
      {children}
    </svg>
  );
});

export default VacuoChest;
