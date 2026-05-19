import React from 'react';

export const iconData = {
  "id": "PlatinoOvert",
  "name": "PlatinoOvert",
  "category": "G",
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
        "d": "M 8.09 12.00 a 3.91 3.91 0 1 0 7.82 0 a 3.91 3.91 0 1 0 -7.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.76 12.00 a 5.24 5.24 0 1 0 10.48 0 a 5.24 5.24 0 1 0 -10.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 12.00 a 6.83 6.83 0 1 0 13.65 0 a 6.83 6.83 0 1 0 -13.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0"
      }
    ]
  ]
};

export const PlatinoOvert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.09 12.00 a 3.91 3.91 0 1 0 7.82 0 a 3.91 3.91 0 1 0 -7.82 0" />
      <path d="M 6.76 12.00 a 5.24 5.24 0 1 0 10.48 0 a 5.24 5.24 0 1 0 -10.48 0" />
      <path d="M 5.17 12.00 a 6.83 6.83 0 1 0 13.65 0 a 6.83 6.83 0 1 0 -13.65 0" />
      <path d="M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0" />
      {children}
    </svg>
  );
});

export default PlatinoOvert;
