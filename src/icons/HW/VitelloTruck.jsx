import React from 'react';

export const iconData = {
  "id": "VitelloTruck",
  "name": "VitelloTruck",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.19 7.44 L 11.32 3.83 L 17.96 6.38 L 20.11 13.16 L 16.15 19.06 L 9.06 19.65 L 4.19 14.48 Z"
      }
    ]
  ]
};

export const VitelloTruck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.19 7.44 L 11.32 3.83 L 17.96 6.38 L 20.11 13.16 L 16.15 19.06 L 9.06 19.65 L 4.19 14.48 Z" />
      {children}
    </svg>
  );
});

export default VitelloTruck;
