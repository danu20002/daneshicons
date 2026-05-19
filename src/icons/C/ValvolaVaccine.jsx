import React from 'react';

export const iconData = {
  "id": "ValvolaVaccine",
  "name": "ValvolaVaccine",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.57 3.57 L 21.12 12.79 L 14.07 20.92 L 4.16 16.72 L 5.09 6.00 Z"
      }
    ]
  ]
};

export const ValvolaVaccine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.57 3.57 L 21.12 12.79 L 14.07 20.92 L 4.16 16.72 L 5.09 6.00 Z" />
      {children}
    </svg>
  );
});

export default ValvolaVaccine;
