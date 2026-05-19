import React from 'react';

export const iconData = {
  "id": "ZanellaGrind",
  "name": "ZanellaGrind",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 12.00 L 19.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.28 L 12.00 19.72"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 6.60 L 17.40 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 17.40 L 17.40 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 1.79 12.00 a 10.21 10.21 0 1 0 20.43 0 a 10.21 10.21 0 1 0 -20.43 0"
      }
    ]
  ]
};

export const ZanellaGrind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 12.00 L 19.72 12.00" />
      <path d="M 12.00 4.28 L 12.00 19.72" />
      <path d="M 6.60 6.60 L 17.40 17.40" />
      <path d="M 6.60 17.40 L 17.40 6.60" />
      <path d="M 1.79 12.00 a 10.21 10.21 0 1 0 20.43 0 a 10.21 10.21 0 1 0 -20.43 0" />
      {children}
    </svg>
  );
});

export default ZanellaGrind;
