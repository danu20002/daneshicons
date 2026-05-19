import React from 'react';

export const iconData = {
  "id": "OracleGem",
  "name": "OracleGem",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.42 21.53 L 2.75 14.40 L 6.86 3.95 L 18.07 4.63 L 20.89 15.50 Z"
      }
    ]
  ]
};

export const OracleGem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.42 21.53 L 2.75 14.40 L 6.86 3.95 L 18.07 4.63 L 20.89 15.50 Z" />
      {children}
    </svg>
  );
});

export default OracleGem;
