import React from 'react';

export const iconData = {
  "id": "ColoPrune",
  "name": "ColoPrune",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.24 12.00 Q 15.69 13.53 17.83 17.83"
      }
    ],
    [
      "path",
      {
        "d": "M 17.83 17.83 Q 13.53 15.69 12.00 20.24"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.24 Q 10.47 15.69 6.17 17.83"
      }
    ],
    [
      "path",
      {
        "d": "M 6.17 17.83 Q 8.31 13.53 3.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 12.00 Q 8.31 10.47 6.17 6.17"
      }
    ],
    [
      "path",
      {
        "d": "M 6.17 6.17 Q 10.47 8.31 12.00 3.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.76 Q 13.53 8.31 17.83 6.17"
      }
    ],
    [
      "path",
      {
        "d": "M 17.83 6.17 Q 15.69 10.47 20.24 12.00"
      }
    ]
  ]
};

export const ColoPrune = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.24 12.00 Q 15.69 13.53 17.83 17.83" />
      <path d="M 17.83 17.83 Q 13.53 15.69 12.00 20.24" />
      <path d="M 12.00 20.24 Q 10.47 15.69 6.17 17.83" />
      <path d="M 6.17 17.83 Q 8.31 13.53 3.76 12.00" />
      <path d="M 3.76 12.00 Q 8.31 10.47 6.17 6.17" />
      <path d="M 6.17 6.17 Q 10.47 8.31 12.00 3.76" />
      <path d="M 12.00 3.76 Q 13.53 8.31 17.83 6.17" />
      <path d="M 17.83 6.17 Q 15.69 10.47 20.24 12.00" />
      {children}
    </svg>
  );
});

export default ColoPrune;
