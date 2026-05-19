import React from 'react';

export const iconData = {
  "id": "PhiloNeat",
  "name": "PhiloNeat",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.87 5.53 L 21.04 14.72 L 14.17 21.19 L 5.13 18.47 L 2.96 9.28 L 9.83 2.81 Z"
      }
    ]
  ]
};

export const PhiloNeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.87 5.53 L 21.04 14.72 L 14.17 21.19 L 5.13 18.47 L 2.96 9.28 L 9.83 2.81 Z" />
      {children}
    </svg>
  );
});

export default PhiloNeat;
