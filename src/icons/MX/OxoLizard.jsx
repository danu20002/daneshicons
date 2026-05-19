import React from 'react';

export const iconData = {
  "id": "OxoLizard",
  "name": "OxoLizard",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.78 7.42 L 16.58 3.78 L 20.22 16.58 L 7.42 20.22 Z"
      }
    ]
  ]
};

export const OxoLizard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.78 7.42 L 16.58 3.78 L 20.22 16.58 L 7.42 20.22 Z" />
      {children}
    </svg>
  );
});

export default OxoLizard;
