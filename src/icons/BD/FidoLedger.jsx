import React from 'react';

export const iconData = {
  "id": "FidoLedger",
  "name": "FidoLedger",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 6.45 L 20.10 6.45 L 20.10 17.55 L 3.90 17.55 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 6.45 L 8.33 2.02 L 24.53 2.02 L 20.10 6.45"
      }
    ],
    [
      "path",
      {
        "d": "M 20.10 6.45 L 24.53 2.02 L 24.53 13.12 L 20.10 17.55"
      }
    ]
  ]
};

export const FidoLedger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 6.45 L 20.10 6.45 L 20.10 17.55 L 3.90 17.55 Z" />
      <path d="M 3.90 6.45 L 8.33 2.02 L 24.53 2.02 L 20.10 6.45" />
      <path d="M 20.10 6.45 L 24.53 2.02 L 24.53 13.12 L 20.10 17.55" />
      {children}
    </svg>
  );
});

export default FidoLedger;
