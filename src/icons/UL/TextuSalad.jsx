import React from 'react';

export const iconData = {
  "id": "TextuSalad",
  "name": "TextuSalad",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 12.00 a 4.33 4.33 0 1 0 8.65 0 a 4.33 4.33 0 1 0 -8.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 12.00 a 6.30 6.30 0 1 0 12.60 0 a 6.30 6.30 0 1 0 -12.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.93 0 a 8.46 8.46 0 1 0 -16.93 0"
      }
    ]
  ]
};

export const TextuSalad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0" stroke-dasharray="5 1" />
      <path d="M 7.67 12.00 a 4.33 4.33 0 1 0 8.65 0 a 4.33 4.33 0 1 0 -8.65 0" />
      <path d="M 5.70 12.00 a 6.30 6.30 0 1 0 12.60 0 a 6.30 6.30 0 1 0 -12.60 0" />
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.93 0 a 8.46 8.46 0 1 0 -16.93 0" />
      {children}
    </svg>
  );
});

export default TextuSalad;
