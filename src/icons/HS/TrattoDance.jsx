import React from 'react';

export const iconData = {
  "id": "TrattoDance",
  "name": "TrattoDance",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 5.43 L 20.33 5.43 L 20.33 18.57 L 3.67 18.57 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 5.43 L 8.12 0.98 L 24.78 0.98 L 20.33 5.43"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 5.43 L 24.78 0.98 L 24.78 14.12 L 20.33 18.57"
      }
    ]
  ]
};

export const TrattoDance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 5.43 L 20.33 5.43 L 20.33 18.57 L 3.67 18.57 Z" />
      <path d="M 3.67 5.43 L 8.12 0.98 L 24.78 0.98 L 20.33 5.43" />
      <path d="M 20.33 5.43 L 24.78 0.98 L 24.78 14.12 L 20.33 18.57" />
      {children}
    </svg>
  );
});

export default TrattoDance;
