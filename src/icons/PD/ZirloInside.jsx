import React from 'react';

export const iconData = {
  "id": "ZirloInside",
  "name": "ZirloInside",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.81 8.22 L 15.78 19.81 L 4.19 15.78 L 8.22 4.19 Z"
      }
    ]
  ]
};

export const ZirloInside = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.81 8.22 L 15.78 19.81 L 4.19 15.78 L 8.22 4.19 Z" />
      {children}
    </svg>
  );
});

export default ZirloInside;
