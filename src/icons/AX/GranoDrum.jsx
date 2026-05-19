import React from 'react';

export const iconData = {
  "id": "GranoDrum",
  "name": "GranoDrum",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.21 12.00 Q 15.44 13.42 17.80 17.80"
      }
    ],
    [
      "path",
      {
        "d": "M 17.80 17.80 Q 13.42 15.44 12.00 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.21 Q 10.58 15.44 6.20 17.80"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 17.80 Q 8.56 13.42 3.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 12.00 Q 8.56 10.58 6.20 6.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 6.20 Q 10.58 8.56 12.00 3.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.79 Q 13.42 8.56 17.80 6.20"
      }
    ],
    [
      "path",
      {
        "d": "M 17.80 6.20 Q 15.44 10.58 20.21 12.00"
      }
    ]
  ]
};

export const GranoDrum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.21 12.00 Q 15.44 13.42 17.80 17.80" />
      <path d="M 17.80 17.80 Q 13.42 15.44 12.00 20.21" />
      <path d="M 12.00 20.21 Q 10.58 15.44 6.20 17.80" />
      <path d="M 6.20 17.80 Q 8.56 13.42 3.79 12.00" />
      <path d="M 3.79 12.00 Q 8.56 10.58 6.20 6.20" />
      <path d="M 6.20 6.20 Q 10.58 8.56 12.00 3.79" />
      <path d="M 12.00 3.79 Q 13.42 8.56 17.80 6.20" />
      <path d="M 17.80 6.20 Q 15.44 10.58 20.21 12.00" />
      {children}
    </svg>
  );
});

export default GranoDrum;
