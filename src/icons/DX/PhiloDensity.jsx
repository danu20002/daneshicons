import React from 'react';

export const iconData = {
  "id": "PhiloDensity",
  "name": "PhiloDensity",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 4.32 L 18.33 12.00 L 12.00 19.68 L 5.67 12.00 Z"
      }
    ]
  ]
};

export const PhiloDensity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 4.32 L 18.33 12.00 L 12.00 19.68 L 5.67 12.00 Z" />
      {children}
    </svg>
  );
});

export default PhiloDensity;
