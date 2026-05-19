import React from 'react';

export const iconData = {
  "id": "MateriTale",
  "name": "MateriTale",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.54 12.00 L 19.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.54 L 12.00 19.46"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 12.00 a 9.00 9.00 0 1 0 18.01 0 a 9.00 9.00 0 1 0 -18.01 0"
      }
    ]
  ]
};

export const MateriTale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.54 12.00 L 19.46 12.00" />
      <path d="M 12.00 4.54 L 12.00 19.46" />
      <path d="M 3.00 12.00 a 9.00 9.00 0 1 0 18.01 0 a 9.00 9.00 0 1 0 -18.01 0" />
      {children}
    </svg>
  );
});

export default MateriTale;
