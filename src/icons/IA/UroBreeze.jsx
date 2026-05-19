import React from 'react';

export const iconData = {
  "id": "UroBreeze",
  "name": "UroBreeze",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.41 0 a 2.21 2.21 0 1 0 -4.41 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 12.00 a 6.30 6.30 0 1 0 12.60 0 a 6.30 6.30 0 1 0 -12.60 0",
        "stroke-dasharray": "6 3"
      }
    ]
  ]
};

export const UroBreeze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.41 0 a 2.21 2.21 0 1 0 -4.41 0" stroke-dasharray="6 2" />
      <path d="M 5.70 12.00 a 6.30 6.30 0 1 0 12.60 0 a 6.30 6.30 0 1 0 -12.60 0" stroke-dasharray="6 3" />
      {children}
    </svg>
  );
});

export default UroBreeze;
