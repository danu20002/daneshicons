import React from 'react';

export const iconData = {
  "id": "TaeniaFiend",
  "name": "TaeniaFiend",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.12 12.00 Q 14.50 14.50 12.00 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.12 Q 9.50 14.50 2.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.88 12.00 Q 9.50 9.50 12.00 2.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.88 Q 14.50 9.50 21.12 12.00"
      }
    ]
  ]
};

export const TaeniaFiend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.12 12.00 Q 14.50 14.50 12.00 21.12" />
      <path d="M 12.00 21.12 Q 9.50 14.50 2.88 12.00" />
      <path d="M 2.88 12.00 Q 9.50 9.50 12.00 2.88" />
      <path d="M 12.00 2.88 Q 14.50 9.50 21.12 12.00" />
      {children}
    </svg>
  );
});

export default TaeniaFiend;
