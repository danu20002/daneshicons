import React from 'react';

export const iconData = {
  "id": "AstroEye",
  "name": "AstroEye",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.37 12.00 a 7.63 7.63 0 1 0 15.26 0 a 7.63 7.63 0 1 0 -15.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 12.00 a 5.40 5.40 0 1 1 10.80 0 a 5.40 5.40 0 1 1 -10.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.13 12.00 L 21.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.57 18.18 L 16.57 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 18.18 L 7.43 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 12.00 L 2.87 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 5.82 L 7.43 4.09"
      }
    ],
    [
      "path",
      {
        "d": "M 15.57 5.82 L 16.57 4.09"
      }
    ]
  ]
};

export const AstroEye = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.37 12.00 a 7.63 7.63 0 1 0 15.26 0 a 7.63 7.63 0 1 0 -15.26 0" />
      <path d="M 6.60 12.00 a 5.40 5.40 0 1 1 10.80 0 a 5.40 5.40 0 1 1 -10.80 0" />
      <path d="M 19.13 12.00 L 21.13 12.00" />
      <path d="M 15.57 18.18 L 16.57 19.91" />
      <path d="M 8.43 18.18 L 7.43 19.91" />
      <path d="M 4.87 12.00 L 2.87 12.00" />
      <path d="M 8.43 5.82 L 7.43 4.09" />
      <path d="M 15.57 5.82 L 16.57 4.09" />
      {children}
    </svg>
  );
});

export default AstroEye;
