import React from 'react';

export const iconData = {
  "id": "ModuSurprise",
  "name": "ModuSurprise",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 12.00 a 4.07 4.07 0 1 0 8.15 0 a 4.07 4.07 0 1 0 -8.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 12.00 a 5.30 5.30 0 1 0 10.60 0 a 5.30 5.30 0 1 0 -10.60 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 12.00 a 7.24 7.24 0 1 0 14.49 0 a 7.24 7.24 0 1 0 -14.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.29 12.00 a 8.71 8.71 0 1 0 17.43 0 a 8.71 8.71 0 1 0 -17.43 0"
      }
    ]
  ]
};

export const ModuSurprise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0" />
      <path d="M 7.93 12.00 a 4.07 4.07 0 1 0 8.15 0 a 4.07 4.07 0 1 0 -8.15 0" />
      <path d="M 6.70 12.00 a 5.30 5.30 0 1 0 10.60 0 a 5.30 5.30 0 1 0 -10.60 0" stroke-dasharray="5 3" />
      <path d="M 4.76 12.00 a 7.24 7.24 0 1 0 14.49 0 a 7.24 7.24 0 1 0 -14.49 0" />
      <path d="M 3.29 12.00 a 8.71 8.71 0 1 0 17.43 0 a 8.71 8.71 0 1 0 -17.43 0" />
      {children}
    </svg>
  );
});

export default ModuSurprise;
