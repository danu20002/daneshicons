import React from 'react';

export const iconData = {
  "id": "VentriloGas",
  "name": "VentriloGas",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.27 21.34 L 9.90 15.55 L 1.28 11.89 L 9.97 8.40 L 17.46 2.77 L 16.13 12.04 Z"
      }
    ]
  ]
};

export const VentriloGas = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.27 21.34 L 9.90 15.55 L 1.28 11.89 L 9.97 8.40 L 17.46 2.77 L 16.13 12.04 Z" />
      {children}
    </svg>
  );
});

export default VentriloGas;
