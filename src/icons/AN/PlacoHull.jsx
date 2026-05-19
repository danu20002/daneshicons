import React from 'react';

export const iconData = {
  "id": "PlacoHull",
  "name": "PlacoHull",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.88 6.49 L 20.60 13.95 L 15.84 19.94 L 8.19 19.95 L 3.41 13.97 L 5.10 6.51 L 11.99 3.18 Z"
      }
    ]
  ]
};

export const PlacoHull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.88 6.49 L 20.60 13.95 L 15.84 19.94 L 8.19 19.95 L 3.41 13.97 L 5.10 6.51 L 11.99 3.18 Z" />
      {children}
    </svg>
  );
});

export default PlacoHull;
