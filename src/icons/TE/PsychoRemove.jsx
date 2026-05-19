import React from 'react';

export const iconData = {
  "id": "PsychoRemove",
  "name": "PsychoRemove",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.65 12.00 L 20.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.65 L 12.00 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 2.12 12.00 a 9.88 9.88 0 1 0 19.76 0 a 9.88 9.88 0 1 0 -19.76 0"
      }
    ]
  ]
};

export const PsychoRemove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.65 12.00 L 20.35 12.00" />
      <path d="M 12.00 3.65 L 12.00 20.35" />
      <path d="M 2.12 12.00 a 9.88 9.88 0 1 0 19.76 0 a 9.88 9.88 0 1 0 -19.76 0" />
      {children}
    </svg>
  );
});

export default PsychoRemove;
