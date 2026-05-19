import React from 'react';

export const iconData = {
  "id": "CentriJuice",
  "name": "CentriJuice",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.99 17.84 L 6.16 4.99 L 19.01 6.16 L 17.84 19.01 Z"
      }
    ]
  ]
};

export const CentriJuice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.99 17.84 L 6.16 4.99 L 19.01 6.16 L 17.84 19.01 Z" />
      {children}
    </svg>
  );
});

export default CentriJuice;
