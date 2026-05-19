import React from 'react';

export const iconData = {
  "id": "ScotoFuel",
  "name": "ScotoFuel",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 12.00 L 20.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.69 L 12.00 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 2.47 12.00 a 9.53 9.53 0 1 0 19.05 0 a 9.53 9.53 0 1 0 -19.05 0"
      }
    ]
  ]
};

export const ScotoFuel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 12.00 L 20.31 12.00" />
      <path d="M 12.00 3.69 L 12.00 20.31" />
      <path d="M 2.47 12.00 a 9.53 9.53 0 1 0 19.05 0 a 9.53 9.53 0 1 0 -19.05 0" />
      {children}
    </svg>
  );
});

export default ScotoFuel;
