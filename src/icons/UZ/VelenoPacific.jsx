import React from 'react';

export const iconData = {
  "id": "VelenoPacific",
  "name": "VelenoPacific",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.70 6.89 L 20.08 8.23 L 11.22 20.88 Z"
      }
    ]
  ]
};

export const VelenoPacific = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.70 6.89 L 20.08 8.23 L 11.22 20.88 Z" />
      {children}
    </svg>
  );
});

export default VelenoPacific;
