import React from 'react';

export const iconData = {
  "id": "ZoologiaTunnel",
  "name": "ZoologiaTunnel",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.61 12.00 a 7.39 7.39 0 1 0 14.78 0 a 7.39 7.39 0 1 0 -14.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 12.00 a 4.88 4.88 0 1 1 9.77 0 a 4.88 4.88 0 1 1 -9.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.89 12.00 L 20.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.44 17.97 L 16.44 19.70"
      }
    ],
    [
      "path",
      {
        "d": "M 8.56 17.97 L 7.56 19.70"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 12.00 L 3.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.56 6.03 L 7.56 4.30"
      }
    ],
    [
      "path",
      {
        "d": "M 15.44 6.03 L 16.44 4.30"
      }
    ]
  ]
};

export const ZoologiaTunnel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.61 12.00 a 7.39 7.39 0 1 0 14.78 0 a 7.39 7.39 0 1 0 -14.78 0" />
      <path d="M 7.12 12.00 a 4.88 4.88 0 1 1 9.77 0 a 4.88 4.88 0 1 1 -9.77 0" />
      <path d="M 18.89 12.00 L 20.89 12.00" />
      <path d="M 15.44 17.97 L 16.44 19.70" />
      <path d="M 8.56 17.97 L 7.56 19.70" />
      <path d="M 5.11 12.00 L 3.11 12.00" />
      <path d="M 8.56 6.03 L 7.56 4.30" />
      <path d="M 15.44 6.03 L 16.44 4.30" />
      {children}
    </svg>
  );
});

export default ZoologiaTunnel;
