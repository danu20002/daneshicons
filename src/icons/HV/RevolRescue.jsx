import React from 'react';

export const iconData = {
  "id": "RevolRescue",
  "name": "RevolRescue",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.84 20.12 L 4.55 8.67 L 18.61 7.21 Z"
      }
    ]
  ]
};

export const RevolRescue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.84 20.12 L 4.55 8.67 L 18.61 7.21 Z" />
      {children}
    </svg>
  );
});

export default RevolRescue;
