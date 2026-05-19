import React from 'react';

export const iconData = {
  "id": "OmbraValve",
  "name": "OmbraValve",
  "category": "Z",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 12.00 a 2.17 2.17 0 1 0 4.34 0 a 2.17 2.17 0 1 0 -4.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.59 12.00 a 4.41 4.41 0 1 0 8.82 0 a 4.41 4.41 0 1 0 -8.82 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 12.00 a 6.30 6.30 0 1 0 12.59 0 a 6.30 6.30 0 1 0 -12.59 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 12.00 a 8.23 8.23 0 1 0 16.45 0 a 8.23 8.23 0 1 0 -16.45 0",
        "stroke-dasharray": "5 3"
      }
    ]
  ]
};

export const OmbraValve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 12.00 a 2.17 2.17 0 1 0 4.34 0 a 2.17 2.17 0 1 0 -4.34 0" />
      <path d="M 7.59 12.00 a 4.41 4.41 0 1 0 8.82 0 a 4.41 4.41 0 1 0 -8.82 0" stroke-dasharray="4 3" />
      <path d="M 5.70 12.00 a 6.30 6.30 0 1 0 12.59 0 a 6.30 6.30 0 1 0 -12.59 0" stroke-dasharray="6 3" />
      <path d="M 3.77 12.00 a 8.23 8.23 0 1 0 16.45 0 a 8.23 8.23 0 1 0 -16.45 0" stroke-dasharray="5 3" />
      {children}
    </svg>
  );
});

export default OmbraValve;
