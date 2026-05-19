import React from 'react';

export const iconData = {
  "id": "VitaleRange",
  "name": "VitaleRange",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.37 15.85 L 15.20 20.64 L 8.15 20.37 L 3.36 15.20 L 3.63 8.15 L 8.80 3.36 L 15.85 3.63 L 20.64 8.80 Z"
      }
    ]
  ]
};

export const VitaleRange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.37 15.85 L 15.20 20.64 L 8.15 20.37 L 3.36 15.20 L 3.63 8.15 L 8.80 3.36 L 15.85 3.63 L 20.64 8.80 Z" />
      {children}
    </svg>
  );
});

export default VitaleRange;
