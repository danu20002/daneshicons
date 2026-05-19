import React from 'react';

export const iconData = {
  "id": "NectoChair",
  "name": "NectoChair",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 21.02 L 8.26 15.17 L 2.74 12.69 L 7.83 9.42 L 8.48 3.41 L 13.17 7.24 L 19.09 6.00 L 16.89 11.64 L 19.89 16.88 L 13.86 16.54 Z"
      }
    ]
  ]
};

export const NectoChair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 21.02 L 8.26 15.17 L 2.74 12.69 L 7.83 9.42 L 8.48 3.41 L 13.17 7.24 L 19.09 6.00 L 16.89 11.64 L 19.89 16.88 L 13.86 16.54 Z" />
      {children}
    </svg>
  );
});

export default NectoChair;
