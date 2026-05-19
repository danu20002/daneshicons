import React from 'react';

export const iconData = {
  "id": "GamaInert",
  "name": "GamaInert",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.12 11.65 L 16.37 18.86 L 8.24 19.21 L 3.88 12.35 L 7.63 5.14 L 15.76 4.79 Z"
      }
    ]
  ]
};

export const GamaInert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.12 11.65 L 16.37 18.86 L 8.24 19.21 L 3.88 12.35 L 7.63 5.14 L 15.76 4.79 Z" />
      {children}
    </svg>
  );
});

export default GamaInert;
