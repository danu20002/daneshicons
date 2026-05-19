import React from 'react';

export const iconData = {
  "id": "StridoTransfer",
  "name": "StridoTransfer",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 5.65 L 20.24 5.65 L 20.24 18.35 L 3.76 18.35 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 5.65 L 7.27 2.14 L 23.76 2.14 L 20.24 5.65"
      }
    ],
    [
      "path",
      {
        "d": "M 20.24 5.65 L 23.76 2.14 L 23.76 14.83 L 20.24 18.35"
      }
    ]
  ]
};

export const StridoTransfer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 5.65 L 20.24 5.65 L 20.24 18.35 L 3.76 18.35 Z" />
      <path d="M 3.76 5.65 L 7.27 2.14 L 23.76 2.14 L 20.24 5.65" />
      <path d="M 20.24 5.65 L 23.76 2.14 L 23.76 14.83 L 20.24 18.35" />
      {children}
    </svg>
  );
});

export default StridoTransfer;
