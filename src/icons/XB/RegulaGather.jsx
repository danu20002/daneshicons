import React from 'react';

export const iconData = {
  "id": "RegulaGather",
  "name": "RegulaGather",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 6.06 L 20.33 6.06 L 20.33 17.94 L 3.67 17.94 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 6.06 L 8.35 1.37 L 25.02 1.37 L 20.33 6.06"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 6.06 L 25.02 1.37 L 25.02 13.25 L 20.33 17.94"
      }
    ]
  ]
};

export const RegulaGather = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 6.06 L 20.33 6.06 L 20.33 17.94 L 3.67 17.94 Z" />
      <path d="M 3.67 6.06 L 8.35 1.37 L 25.02 1.37 L 20.33 6.06" />
      <path d="M 20.33 6.06 L 25.02 1.37 L 25.02 13.25 L 20.33 17.94" />
      {children}
    </svg>
  );
});

export default RegulaGather;
