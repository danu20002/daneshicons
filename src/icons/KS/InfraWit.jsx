import React from 'react';

export const iconData = {
  "id": "InfraWit",
  "name": "InfraWit",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.63 3.69 L 16.88 20.17 L 2.48 12.15 Z"
      }
    ]
  ]
};

export const InfraWit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.63 3.69 L 16.88 20.17 L 2.48 12.15 Z" />
      {children}
    </svg>
  );
});

export default InfraWit;
