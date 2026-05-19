import React from 'react';

export const iconData = {
  "id": "VernileVirtue",
  "name": "VernileVirtue",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 12.00 L 20.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.77 L 12.00 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 6.24 L 17.76 17.76"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 17.76 L 17.76 6.24"
      }
    ],
    [
      "path",
      {
        "d": "M 1.00 12.00 a 11.00 11.00 0 1 0 21.99 0 a 11.00 11.00 0 1 0 -21.99 0"
      }
    ]
  ]
};

export const VernileVirtue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 12.00 L 20.23 12.00" />
      <path d="M 12.00 3.77 L 12.00 20.23" />
      <path d="M 6.24 6.24 L 17.76 17.76" />
      <path d="M 6.24 17.76 L 17.76 6.24" />
      <path d="M 1.00 12.00 a 11.00 11.00 0 1 0 21.99 0 a 11.00 11.00 0 1 0 -21.99 0" />
      {children}
    </svg>
  );
});

export default VernileVirtue;
