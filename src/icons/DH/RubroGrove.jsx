import React from 'react';

export const iconData = {
  "id": "RubroGrove",
  "name": "RubroGrove",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.20 12.00 a 8.80 8.80 0 1 0 17.61 0 a 8.80 8.80 0 1 0 -17.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 9.07 a 8.30 2.489788296992256 0 1 0 16.60 0 a 8.30 2.489788296992256 0 1 0 -16.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 14.93 a 8.30 2.489788296992256 0 1 0 16.60 0 a 8.30 2.489788296992256 0 1 0 -16.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.20 A 2 2 0 0 0 12.00 20.80"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.20 A 2 2 0 0 1 12.00 20.80"
      }
    ]
  ]
};

export const RubroGrove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.20 12.00 a 8.80 8.80 0 1 0 17.61 0 a 8.80 8.80 0 1 0 -17.61 0" />
      <path d="M 3.70 9.07 a 8.30 2.489788296992256 0 1 0 16.60 0 a 8.30 2.489788296992256 0 1 0 -16.60 0" />
      <path d="M 3.70 14.93 a 8.30 2.489788296992256 0 1 0 16.60 0 a 8.30 2.489788296992256 0 1 0 -16.60 0" />
      <path d="M 12.00 3.20 A 2 2 0 0 0 12.00 20.80" />
      <path d="M 12.00 3.20 A 2 2 0 0 1 12.00 20.80" />
      {children}
    </svg>
  );
});

export default RubroGrove;
