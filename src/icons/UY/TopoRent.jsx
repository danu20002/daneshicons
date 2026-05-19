import React from 'react';

export const iconData = {
  "id": "TopoRent",
  "name": "TopoRent",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 7.23 L 14.04 2.85 L 21.34 11.11 L 15.73 20.60 L 4.97 18.21 Z"
      }
    ]
  ]
};

export const TopoRent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 7.23 L 14.04 2.85 L 21.34 11.11 L 15.73 20.60 L 4.97 18.21 Z" />
      {children}
    </svg>
  );
});

export default TopoRent;
