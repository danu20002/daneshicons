import React from 'react';

export const iconData = {
  "id": "ZondLegal",
  "name": "ZondLegal",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.54 12.00 L 18.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.54 L 12.00 18.46"
      }
    ],
    [
      "path",
      {
        "d": "M 2.06 12.00 a 9.94 9.94 0 1 0 19.88 0 a 9.94 9.94 0 1 0 -19.88 0"
      }
    ]
  ]
};

export const ZondLegal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.54 12.00 L 18.46 12.00" />
      <path d="M 12.00 5.54 L 12.00 18.46" />
      <path d="M 2.06 12.00 a 9.94 9.94 0 1 0 19.88 0 a 9.94 9.94 0 1 0 -19.88 0" />
      {children}
    </svg>
  );
});

export default ZondLegal;
