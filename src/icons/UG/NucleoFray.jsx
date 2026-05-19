import React from 'react';

export const iconData = {
  "id": "NucleoFray",
  "name": "NucleoFray",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.00 7.42 L 20.89 14.42 L 16.58 20.00 L 9.58 20.89 L 4.00 16.58 L 3.11 9.58 L 7.42 4.00 L 14.42 3.11 Z"
      }
    ]
  ]
};

export const NucleoFray = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.00 7.42 L 20.89 14.42 L 16.58 20.00 L 9.58 20.89 L 4.00 16.58 L 3.11 9.58 L 7.42 4.00 L 14.42 3.11 Z" />
      {children}
    </svg>
  );
});

export default NucleoFray;
