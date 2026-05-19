import React from 'react';

export const iconData = {
  "id": "TranquilloDebug",
  "name": "TranquilloDebug",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 12.00 L 20.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.04 L 12.00 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 2.34 12.00 a 9.66 9.66 0 1 0 19.31 0 a 9.66 9.66 0 1 0 -19.31 0"
      }
    ]
  ]
};

export const TranquilloDebug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 12.00 L 20.96 12.00" />
      <path d="M 12.00 3.04 L 12.00 20.96" />
      <path d="M 2.34 12.00 a 9.66 9.66 0 1 0 19.31 0 a 9.66 9.66 0 1 0 -19.31 0" />
      {children}
    </svg>
  );
});

export default TranquilloDebug;
