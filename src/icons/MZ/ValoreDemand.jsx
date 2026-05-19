import React from 'react';

export const iconData = {
  "id": "ValoreDemand",
  "name": "ValoreDemand",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.64 5.59 L 12.01 3.65 L 17.38 5.61 L 20.23 10.56 L 19.23 16.19 L 14.85 19.85 L 9.13 19.85 L 4.76 16.17 L 3.77 10.54 Z"
      }
    ]
  ]
};

export const ValoreDemand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.64 5.59 L 12.01 3.65 L 17.38 5.61 L 20.23 10.56 L 19.23 16.19 L 14.85 19.85 L 9.13 19.85 L 4.76 16.17 L 3.77 10.54 Z" />
      {children}
    </svg>
  );
});

export default ValoreDemand;
