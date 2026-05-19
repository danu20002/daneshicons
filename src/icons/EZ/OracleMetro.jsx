import React from 'react';

export const iconData = {
  "id": "OracleMetro",
  "name": "OracleMetro",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.35 12.70 L 8.23 8.69 L 11.30 1.35 L 15.31 8.23 L 22.65 11.30 L 15.77 15.31 L 12.70 22.65 L 8.69 15.77 Z"
      }
    ]
  ]
};

export const OracleMetro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.35 12.70 L 8.23 8.69 L 11.30 1.35 L 15.31 8.23 L 22.65 11.30 L 15.77 15.31 L 12.70 22.65 L 8.69 15.77 Z" />
      {children}
    </svg>
  );
});

export default OracleMetro;
