import React from 'react';

export const iconData = {
  "id": "TrichinoExtent",
  "name": "TrichinoExtent",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 12.00 a 2.31 2.31 0 1 0 4.63 0 a 2.31 2.31 0 1 0 -4.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 12.00 a 6.02 6.02 0 1 0 12.03 0 a 6.02 6.02 0 1 0 -12.03 0"
      }
    ]
  ]
};

export const TrichinoExtent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 12.00 a 2.31 2.31 0 1 0 4.63 0 a 2.31 2.31 0 1 0 -4.63 0" />
      <path d="M 5.98 12.00 a 6.02 6.02 0 1 0 12.03 0 a 6.02 6.02 0 1 0 -12.03 0" />
      {children}
    </svg>
  );
});

export default TrichinoExtent;
