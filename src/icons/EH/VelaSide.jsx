import React from 'react';

export const iconData = {
  "id": "VelaSide",
  "name": "VelaSide",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.26 17.61 L 8.19 11.39 L 6.39 4.26 L 12.61 8.19 L 19.74 6.39 L 15.81 12.61 L 17.61 19.74 L 11.39 15.81 Z"
      }
    ]
  ]
};

export const VelaSide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.26 17.61 L 8.19 11.39 L 6.39 4.26 L 12.61 8.19 L 19.74 6.39 L 15.81 12.61 L 17.61 19.74 L 11.39 15.81 Z" />
      {children}
    </svg>
  );
});

export default VelaSide;
