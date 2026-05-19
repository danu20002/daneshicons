import React from 'react';

export const iconData = {
  "id": "VerlenScythe",
  "name": "VerlenScythe",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.54 5.75 L 19.46 5.75 L 19.46 18.25 L 4.54 18.25 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 5.75 L 9.09 1.21 L 24.00 1.21 L 19.46 5.75"
      }
    ],
    [
      "path",
      {
        "d": "M 19.46 5.75 L 24.00 1.21 L 24.00 13.71 L 19.46 18.25"
      }
    ]
  ]
};

export const VerlenScythe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.54 5.75 L 19.46 5.75 L 19.46 18.25 L 4.54 18.25 Z" />
      <path d="M 4.54 5.75 L 9.09 1.21 L 24.00 1.21 L 19.46 5.75" />
      <path d="M 19.46 5.75 L 24.00 1.21 L 24.00 13.71 L 19.46 18.25" />
      {children}
    </svg>
  );
});

export default VerlenScythe;
