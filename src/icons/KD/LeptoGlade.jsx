import React from 'react';

export const iconData = {
  "id": "LeptoGlade",
  "name": "LeptoGlade",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.12 21.95 L 10.89 15.32 L 3.51 18.05 L 8.50 11.97 L 3.63 5.79 L 10.95 8.66 L 15.32 2.12 L 14.85 9.97 L 22.43 12.10 L 14.81 14.08 Z"
      }
    ]
  ]
};

export const LeptoGlade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.12 21.95 L 10.89 15.32 L 3.51 18.05 L 8.50 11.97 L 3.63 5.79 L 10.95 8.66 L 15.32 2.12 L 14.85 9.97 L 22.43 12.10 L 14.81 14.08 Z" />
      {children}
    </svg>
  );
});

export default LeptoGlade;
