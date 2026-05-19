import React from 'react';

export const iconData = {
  "id": "VenaDeck",
  "name": "VenaDeck",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.41 12.00 a 9.59 9.59 0 1 0 19.17 0 a 9.59 9.59 0 1 0 -19.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.96 8.80 a 9.04 2.711049466098188 0 1 0 18.07 0 a 9.04 2.711049466098188 0 1 0 -18.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.96 15.20 a 9.04 2.7110494660981876 0 1 0 18.07 0 a 9.04 2.7110494660981876 0 1 0 -18.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.79 3.70 A 2 2 0 0 0 16.79 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 16.79 3.70 A 2 2 0 0 1 16.79 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 3.70 A 2 2 0 0 0 7.21 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 3.70 A 2 2 0 0 1 7.21 20.30"
      }
    ]
  ]
};

export const VenaDeck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.41 12.00 a 9.59 9.59 0 1 0 19.17 0 a 9.59 9.59 0 1 0 -19.17 0" />
      <path d="M 2.96 8.80 a 9.04 2.711049466098188 0 1 0 18.07 0 a 9.04 2.711049466098188 0 1 0 -18.07 0" />
      <path d="M 2.96 15.20 a 9.04 2.7110494660981876 0 1 0 18.07 0 a 9.04 2.7110494660981876 0 1 0 -18.07 0" />
      <path d="M 16.79 3.70 A 2 2 0 0 0 16.79 20.30" />
      <path d="M 16.79 3.70 A 2 2 0 0 1 16.79 20.30" />
      <path d="M 7.21 3.70 A 2 2 0 0 0 7.21 20.30" />
      <path d="M 7.21 3.70 A 2 2 0 0 1 7.21 20.30" />
      {children}
    </svg>
  );
});

export default VenaDeck;
