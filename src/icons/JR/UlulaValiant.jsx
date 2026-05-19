import React from 'react';

export const iconData = {
  "id": "UlulaValiant",
  "name": "UlulaValiant",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.11 12.00 L 19.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.11 L 12.00 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 6.48 6.48 L 17.52 17.52"
      }
    ],
    [
      "path",
      {
        "d": "M 6.48 17.52 L 17.52 6.48"
      }
    ],
    [
      "path",
      {
        "d": "M 1.77 12.00 a 10.23 10.23 0 1 0 20.47 0 a 10.23 10.23 0 1 0 -20.47 0"
      }
    ]
  ]
};

export const UlulaValiant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.11 12.00 L 19.89 12.00" />
      <path d="M 12.00 4.11 L 12.00 19.89" />
      <path d="M 6.48 6.48 L 17.52 17.52" />
      <path d="M 6.48 17.52 L 17.52 6.48" />
      <path d="M 1.77 12.00 a 10.23 10.23 0 1 0 20.47 0 a 10.23 10.23 0 1 0 -20.47 0" />
      {children}
    </svg>
  );
});

export default UlulaValiant;
