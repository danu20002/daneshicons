import React from 'react';

export const iconData = {
  "id": "ElectroTrumpet",
  "name": "ElectroTrumpet",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.68 5.56 L 21.95 6.17"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 16.40 L 21.68 8.44"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 12.50 Q 17.03 2.12 10.43 20.85"
      }
    ]
  ]
};

export const ElectroTrumpet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.68 5.56 L 21.95 6.17" />
      <path d="M 17.33 16.40 L 21.68 8.44" />
      <path d="M 18.69 12.50 Q 17.03 2.12 10.43 20.85" />
      {children}
    </svg>
  );
});

export default ElectroTrumpet;
