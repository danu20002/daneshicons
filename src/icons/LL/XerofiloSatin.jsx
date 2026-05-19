import React from 'react';

export const iconData = {
  "id": "XerofiloSatin",
  "name": "XerofiloSatin",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.36 2.86 L 17.31 4.37 L 21.14 10.36 L 19.63 17.31 L 13.64 21.14 L 6.69 19.63 L 2.86 13.64 L 4.37 6.69 Z"
      }
    ]
  ]
};

export const XerofiloSatin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.36 2.86 L 17.31 4.37 L 21.14 10.36 L 19.63 17.31 L 13.64 21.14 L 6.69 19.63 L 2.86 13.64 L 4.37 6.69 Z" />
      {children}
    </svg>
  );
});

export default XerofiloSatin;
