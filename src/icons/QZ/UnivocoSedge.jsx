import React from 'react';

export const iconData = {
  "id": "UnivocoSedge",
  "name": "UnivocoSedge",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.27 12.00 L 18.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.27 L 12.00 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 1.52 12.00 a 10.48 10.48 0 1 0 20.96 0 a 10.48 10.48 0 1 0 -20.96 0"
      }
    ]
  ]
};

export const UnivocoSedge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.27 12.00 L 18.73 12.00" />
      <path d="M 12.00 5.27 L 12.00 18.73" />
      <path d="M 1.52 12.00 a 10.48 10.48 0 1 0 20.96 0 a 10.48 10.48 0 1 0 -20.96 0" />
      {children}
    </svg>
  );
});

export default UnivocoSedge;
