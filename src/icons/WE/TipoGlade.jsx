import React from 'react';

export const iconData = {
  "id": "TipoGlade",
  "name": "TipoGlade",
  "category": "WE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.25 14.41 3.25 9.92 Q 6.09 9.51 8.93 9.11 Q 9.37 8.58 9.81 8.05 Q 12.53 7.58 15.24 7.11 Q 16.35 6.50 17.45 5.89 Q 18.05 6.15 18.65 6.41 Q 15.94 12.66 13.24 18.90 Z"
      }
    ]
  ]
};

export const TipoGlade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.25 14.41 3.25 9.92 Q 6.09 9.51 8.93 9.11 Q 9.37 8.58 9.81 8.05 Q 12.53 7.58 15.24 7.11 Q 16.35 6.50 17.45 5.89 Q 18.05 6.15 18.65 6.41 Q 15.94 12.66 13.24 18.90 Z" />
      {children}
    </svg>
  );
});

export default TipoGlade;
