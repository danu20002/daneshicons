import React from 'react';

export const iconData = {
  "id": "MobiloOval",
  "name": "MobiloOval",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.53 2.01 C 6.56 12.28, 7.83 16.31, 20.54 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 7.38 6.36 C 9.08 9.21, 5.72 8.77, 19.01 16.49"
      }
    ],
    [
      "path",
      {
        "d": "M 8.94 8.11 C 6.83 13.09, 19.97 7.65, 18.99 21.95"
      }
    ]
  ]
};

export const MobiloOval = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.53 2.01 C 6.56 12.28, 7.83 16.31, 20.54 18.74" />
      <path d="M 7.38 6.36 C 9.08 9.21, 5.72 8.77, 19.01 16.49" />
      <path d="M 8.94 8.11 C 6.83 13.09, 19.97 7.65, 18.99 21.95" />
      {children}
    </svg>
  );
});

export default MobiloOval;
