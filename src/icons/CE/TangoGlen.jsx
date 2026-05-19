import React from 'react';

export const iconData = {
  "id": "TangoGlen",
  "name": "TangoGlen",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 12.00 a 2.11 2.11 0 1 0 4.23 0 a 2.11 2.11 0 1 0 -4.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 12.00 a 4.33 4.33 0 1 0 8.66 0 a 4.33 4.33 0 1 0 -8.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 12.00 a 6.29 6.29 0 1 0 12.59 0 a 6.29 6.29 0 1 0 -12.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 12.00 a 8.22 8.22 0 1 0 16.44 0 a 8.22 8.22 0 1 0 -16.44 0"
      }
    ]
  ]
};

export const TangoGlen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 12.00 a 2.11 2.11 0 1 0 4.23 0 a 2.11 2.11 0 1 0 -4.23 0" />
      <path d="M 7.67 12.00 a 4.33 4.33 0 1 0 8.66 0 a 4.33 4.33 0 1 0 -8.66 0" />
      <path d="M 5.71 12.00 a 6.29 6.29 0 1 0 12.59 0 a 6.29 6.29 0 1 0 -12.59 0" />
      <path d="M 3.78 12.00 a 8.22 8.22 0 1 0 16.44 0 a 8.22 8.22 0 1 0 -16.44 0" />
      {children}
    </svg>
  );
});

export default TangoGlen;
