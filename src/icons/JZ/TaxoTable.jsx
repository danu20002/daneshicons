import React from 'react';

export const iconData = {
  "id": "TaxoTable",
  "name": "TaxoTable",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.74 8.11 L 15.89 19.74 L 4.26 15.89 L 8.11 4.26 Z"
      }
    ]
  ]
};

export const TaxoTable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.74 8.11 L 15.89 19.74 L 4.26 15.89 L 8.11 4.26 Z" />
      {children}
    </svg>
  );
});

export default TaxoTable;
