import React from 'react';

export const iconData = {
  "id": "VenustoGirl",
  "name": "VenustoGirl",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.63 12.00 a 8.37 8.37 0 1 0 16.75 0 a 8.37 8.37 0 1 0 -16.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 12.00 a 6.02 6.02 0 1 1 12.05 0 a 6.02 6.02 0 1 1 -12.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.87 12.00 L 21.87 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 17.06 L 19.56 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 13.37 19.76 L 13.71 21.72"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 18.82 L 7.06 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 14.69 L 2.72 15.38"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 9.31 L 2.72 8.62"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 5.18 L 7.06 3.45"
      }
    ],
    [
      "path",
      {
        "d": "M 13.37 4.24 L 13.71 2.28"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 6.94 L 19.56 5.65"
      }
    ]
  ]
};

export const VenustoGirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.63 12.00 a 8.37 8.37 0 1 0 16.75 0 a 8.37 8.37 0 1 0 -16.75 0" />
      <path d="M 5.98 12.00 a 6.02 6.02 0 1 1 12.05 0 a 6.02 6.02 0 1 1 -12.05 0" />
      <path d="M 19.87 12.00 L 21.87 12.00" />
      <path d="M 18.03 17.06 L 19.56 18.35" />
      <path d="M 13.37 19.76 L 13.71 21.72" />
      <path d="M 8.06 18.82 L 7.06 20.55" />
      <path d="M 4.60 14.69 L 2.72 15.38" />
      <path d="M 4.60 9.31 L 2.72 8.62" />
      <path d="M 8.06 5.18 L 7.06 3.45" />
      <path d="M 13.37 4.24 L 13.71 2.28" />
      <path d="M 18.03 6.94 L 19.56 5.65" />
      {children}
    </svg>
  );
});

export default VenustoGirl;
