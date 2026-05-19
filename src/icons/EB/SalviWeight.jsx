import React from 'react';

export const iconData = {
  "id": "SalviWeight",
  "name": "SalviWeight",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.75 6.31 L 19.25 6.31 L 19.25 17.69 L 4.75 17.69 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 6.31 L 9.45 1.61 L 23.95 1.61 L 19.25 6.31"
      }
    ],
    [
      "path",
      {
        "d": "M 19.25 6.31 L 23.95 1.61 L 23.95 12.99 L 19.25 17.69"
      }
    ]
  ]
};

export const SalviWeight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.75 6.31 L 19.25 6.31 L 19.25 17.69 L 4.75 17.69 Z" />
      <path d="M 4.75 6.31 L 9.45 1.61 L 23.95 1.61 L 19.25 6.31" />
      <path d="M 19.25 6.31 L 23.95 1.61 L 23.95 12.99 L 19.25 17.69" />
      {children}
    </svg>
  );
});

export default SalviWeight;
