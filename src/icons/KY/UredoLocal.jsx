import React from 'react';

export const iconData = {
  "id": "UredoLocal",
  "name": "UredoLocal",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 12.00 a 2.22 2.22 0 1 0 4.44 0 a 2.22 2.22 0 1 0 -4.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.40 12.00 a 3.60 3.60 0 1 0 7.20 0 a 3.60 3.60 0 1 0 -7.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 12.00 a 5.63 5.63 0 1 0 11.26 0 a 5.63 5.63 0 1 0 -11.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 12.00 a 7.06 7.06 0 1 0 14.11 0 a 7.06 7.06 0 1 0 -14.11 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0"
      }
    ]
  ]
};

export const UredoLocal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 12.00 a 2.22 2.22 0 1 0 4.44 0 a 2.22 2.22 0 1 0 -4.44 0" />
      <path d="M 8.40 12.00 a 3.60 3.60 0 1 0 7.20 0 a 3.60 3.60 0 1 0 -7.20 0" />
      <path d="M 6.37 12.00 a 5.63 5.63 0 1 0 11.26 0 a 5.63 5.63 0 1 0 -11.26 0" />
      <path d="M 4.94 12.00 a 7.06 7.06 0 1 0 14.11 0 a 7.06 7.06 0 1 0 -14.11 0" stroke-dasharray="6 2" />
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0" />
      {children}
    </svg>
  );
});

export default UredoLocal;
