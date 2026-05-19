import React from 'react';

export const iconData = {
  "id": "VinoRefund",
  "name": "VinoRefund",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 6.72 L 20.24 6.72 L 20.24 17.28 L 3.76 17.28 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 6.72 L 8.48 1.99 L 24.97 1.99 L 20.24 6.72"
      }
    ],
    [
      "path",
      {
        "d": "M 20.24 6.72 L 24.97 1.99 L 24.97 12.56 L 20.24 17.28"
      }
    ]
  ]
};

export const VinoRefund = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 6.72 L 20.24 6.72 L 20.24 17.28 L 3.76 17.28 Z" />
      <path d="M 3.76 6.72 L 8.48 1.99 L 24.97 1.99 L 20.24 6.72" />
      <path d="M 20.24 6.72 L 24.97 1.99 L 24.97 12.56 L 20.24 17.28" />
      {children}
    </svg>
  );
});

export default VinoRefund;
