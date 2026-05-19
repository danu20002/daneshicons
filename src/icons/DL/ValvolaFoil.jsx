import React from 'react';

export const iconData = {
  "id": "ValvolaFoil",
  "name": "ValvolaFoil",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.80 20.08 L 8.97 20.40 L 3.92 15.80 L 3.60 8.97 L 8.20 3.92 L 15.03 3.60 L 20.08 8.20 L 20.40 15.03 Z"
      }
    ]
  ]
};

export const ValvolaFoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.80 20.08 L 8.97 20.40 L 3.92 15.80 L 3.60 8.97 L 8.20 3.92 L 15.03 3.60 L 20.08 8.20 L 20.40 15.03 Z" />
      {children}
    </svg>
  );
});

export default ValvolaFoil;
