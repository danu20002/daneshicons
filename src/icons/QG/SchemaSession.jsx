import React from 'react';

export const iconData = {
  "id": "SchemaSession",
  "name": "SchemaSession",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.31 12.00 L 18.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.31 L 12.00 18.69"
      }
    ],
    [
      "path",
      {
        "d": "M 2.57 12.00 a 9.43 9.43 0 1 0 18.86 0 a 9.43 9.43 0 1 0 -18.86 0"
      }
    ]
  ]
};

export const SchemaSession = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.31 12.00 L 18.69 12.00" />
      <path d="M 12.00 5.31 L 12.00 18.69" />
      <path d="M 2.57 12.00 a 9.43 9.43 0 1 0 18.86 0 a 9.43 9.43 0 1 0 -18.86 0" />
      {children}
    </svg>
  );
});

export default SchemaSession;
