import React from 'react';

export const iconData = {
  "id": "ZebraVeto",
  "name": "ZebraVeto",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 8.73 0 1 0 17.46 0 a 8.73 8.73 0 1 0 -17.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 7.64 a 7.56 2.2678853567286286 0 1 0 15.12 0 a 7.56 2.2678853567286286 0 1 0 -15.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 2.6187284423969683 0 1 0 17.46 0 a 8.73 2.6187284423969683 0 1 0 -17.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 16.36 a 7.56 2.2678853567286286 0 1 0 15.12 0 a 7.56 2.2678853567286286 0 1 0 -15.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.27 A 2 2 0 0 0 12.00 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.27 A 2 2 0 0 1 12.00 20.73"
      }
    ]
  ]
};

export const ZebraVeto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.46 0 a 8.73 8.73 0 1 0 -17.46 0" />
      <path d="M 4.44 7.64 a 7.56 2.2678853567286286 0 1 0 15.12 0 a 7.56 2.2678853567286286 0 1 0 -15.12 0" />
      <path d="M 3.27 12.00 a 8.73 2.6187284423969683 0 1 0 17.46 0 a 8.73 2.6187284423969683 0 1 0 -17.46 0" />
      <path d="M 4.44 16.36 a 7.56 2.2678853567286286 0 1 0 15.12 0 a 7.56 2.2678853567286286 0 1 0 -15.12 0" />
      <path d="M 12.00 3.27 A 2 2 0 0 0 12.00 20.73" />
      <path d="M 12.00 3.27 A 2 2 0 0 1 12.00 20.73" />
      {children}
    </svg>
  );
});

export default ZebraVeto;
