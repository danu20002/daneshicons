import React from 'react';

export const iconData = {
  "id": "PhasoSoil",
  "name": "PhasoSoil",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 11.22 L 7.48 5.08 L 14.59 4.15 L 19.75 9.13 L 19.08 16.28 L 13.07 20.20 L 6.26 17.95 Z"
      }
    ]
  ]
};

export const PhasoSoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 11.22 L 7.48 5.08 L 14.59 4.15 L 19.75 9.13 L 19.08 16.28 L 13.07 20.20 L 6.26 17.95 Z" />
      {children}
    </svg>
  );
});

export default PhasoSoil;
