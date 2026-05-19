import React from 'react';

export const iconData = {
  "id": "VistaVintage",
  "name": "VistaVintage",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.49 15.29 L 14.38 14.23 L 15.97 22.25 L 11.74 15.25 L 6.46 21.49 L 9.30 13.82 L 1.13 13.59 L 8.89 11.03 L 3.98 4.49 L 10.82 8.96 L 12.87 1.05 L 13.64 9.19 L 21.11 5.85 L 15.22 11.53 Z"
      }
    ]
  ]
};

export const VistaVintage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.49 15.29 L 14.38 14.23 L 15.97 22.25 L 11.74 15.25 L 6.46 21.49 L 9.30 13.82 L 1.13 13.59 L 8.89 11.03 L 3.98 4.49 L 10.82 8.96 L 12.87 1.05 L 13.64 9.19 L 21.11 5.85 L 15.22 11.53 Z" />
      {children}
    </svg>
  );
});

export default VistaVintage;
