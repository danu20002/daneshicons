import React from 'react';

export const iconData = {
  "id": "UmidiStar",
  "name": "UmidiStar",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.27 13.55 Q 21.63 12.26 8.48 5.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 11.87 L 14.61 4.85"
      }
    ],
    [
      "path",
      {
        "d": "M 15.55 18.14 A 3.92 3.69 118 0 0 15.84 10.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 18.98 Q 6.95 7.20 3.29 7.45"
      }
    ]
  ]
};

export const UmidiStar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.27 13.55 Q 21.63 12.26 8.48 5.23" />
      <path d="M 7.10 11.87 L 14.61 4.85" />
      <path d="M 15.55 18.14 A 3.92 3.69 118 0 0 15.84 10.58" />
      <path d="M 5.10 18.98 Q 6.95 7.20 3.29 7.45" />
      {children}
    </svg>
  );
});

export default UmidiStar;
