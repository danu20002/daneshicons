import React from 'react';

export const iconData = {
  "id": "PhiloRevise",
  "name": "PhiloRevise",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.19 8.60 L 20.90 16.09 L 15.40 21.19 L 7.91 20.90 L 2.81 15.40 L 3.10 7.91 L 8.60 2.81 L 16.09 3.10 Z"
      }
    ]
  ]
};

export const PhiloRevise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.19 8.60 L 20.90 16.09 L 15.40 21.19 L 7.91 20.90 L 2.81 15.40 L 3.10 7.91 L 8.60 2.81 L 16.09 3.10 Z" />
      {children}
    </svg>
  );
});

export default PhiloRevise;
