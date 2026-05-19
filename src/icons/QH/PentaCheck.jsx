import React from 'react';

export const iconData = {
  "id": "PentaCheck",
  "name": "PentaCheck",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.83 4.67 L 8.25 6.11"
      }
    ],
    [
      "path",
      {
        "d": "M 8.79 6.84 C 5.82 3.28, 16.32 3.89, 2.93 17.64"
      }
    ]
  ]
};

export const PentaCheck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.83 4.67 L 8.25 6.11" />
      <path d="M 8.79 6.84 C 5.82 3.28, 16.32 3.89, 2.93 17.64" />
      {children}
    </svg>
  );
});

export default PentaCheck;
