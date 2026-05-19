import React from 'react';

export const iconData = {
  "id": "BrakeTeeth",
  "name": "BrakeTeeth",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.02 18.64 L 3.83 8.36 L 12.94 3.11 L 20.75 10.14 L 16.47 19.74 Z"
      }
    ]
  ]
};

export const BrakeTeeth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.02 18.64 L 3.83 8.36 L 12.94 3.11 L 20.75 10.14 L 16.47 19.74 Z" />
      {children}
    </svg>
  );
});

export default BrakeTeeth;
