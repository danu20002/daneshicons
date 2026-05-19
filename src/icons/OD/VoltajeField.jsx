import React from 'react';

export const iconData = {
  "id": "VoltajeField",
  "name": "VoltajeField",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.45 12.61 L 6.75 19.88 L 7.80 3.51 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.02 14.40 L 6.91 16.01 L 11.07 5.58 Z"
      }
    ]
  ]
};

export const VoltajeField = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.45 12.61 L 6.75 19.88 L 7.80 3.51 Z" />
      <path d="M 18.02 14.40 L 6.91 16.01 L 11.07 5.58 Z" />
      {children}
    </svg>
  );
});

export default VoltajeField;
