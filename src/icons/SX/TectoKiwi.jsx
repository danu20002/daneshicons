import React from 'react';

export const iconData = {
  "id": "TectoKiwi",
  "name": "TectoKiwi",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.95 15.05 L 8.56 8.97 L 13.88 2.64 L 16.34 10.54 L 19.16 18.31 L 11.10 16.49 Z"
      }
    ]
  ]
};

export const TectoKiwi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.95 15.05 L 8.56 8.97 L 13.88 2.64 L 16.34 10.54 L 19.16 18.31 L 11.10 16.49 Z" />
      {children}
    </svg>
  );
});

export default TectoKiwi;
