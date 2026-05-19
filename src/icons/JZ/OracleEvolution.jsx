import React from 'react';

export const iconData = {
  "id": "OracleEvolution",
  "name": "OracleEvolution",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.32 5.70 L 21.12 15.19 L 13.80 21.50 L 4.68 18.30 L 2.88 8.81 L 10.20 2.50 Z"
      }
    ]
  ]
};

export const OracleEvolution = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.32 5.70 L 21.12 15.19 L 13.80 21.50 L 4.68 18.30 L 2.88 8.81 L 10.20 2.50 Z" />
      {children}
    </svg>
  );
});

export default OracleEvolution;
