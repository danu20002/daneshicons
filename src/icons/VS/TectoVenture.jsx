import React from 'react';

export const iconData = {
  "id": "TectoVenture",
  "name": "TectoVenture",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.96 11.37 L 12.63 3.96 L 20.04 12.63 L 11.37 20.04 Z"
      }
    ]
  ]
};

export const TectoVenture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.96 11.37 L 12.63 3.96 L 20.04 12.63 L 11.37 20.04 Z" />
      {children}
    </svg>
  );
});

export default TectoVenture;
