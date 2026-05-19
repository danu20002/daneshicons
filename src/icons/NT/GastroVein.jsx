import React from 'react';

export const iconData = {
  "id": "GastroVein",
  "name": "GastroVein",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 18.20 L 8.68 12.49 L 2.72 8.32 L 9.92 9.37 L 10.54 2.13 L 13.23 8.88 L 19.82 5.80 L 15.32 11.51 L 21.28 15.68 L 14.08 14.63 L 13.46 21.87 L 10.77 15.12 Z"
      }
    ]
  ]
};

export const GastroVein = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 18.20 L 8.68 12.49 L 2.72 8.32 L 9.92 9.37 L 10.54 2.13 L 13.23 8.88 L 19.82 5.80 L 15.32 11.51 L 21.28 15.68 L 14.08 14.63 L 13.46 21.87 L 10.77 15.12 Z" />
      {children}
    </svg>
  );
});

export default GastroVein;
