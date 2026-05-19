import React from 'react';

export const iconData = {
  "id": "ProprioJunction",
  "name": "ProprioJunction",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.03 10.51 L 14.19 7.34 L 4.06 6.02 L 15.72 21.18 L 16.58 16.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 11.40 C 6.00 15.46, 5.23 11.60, 9.13 3.42"
      }
    ],
    [
      "path",
      {
        "d": "M 20.91 18.38 A 6.00 2.83 130 0 0 9.32 8.17"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 9.53 A 4.06 4.82 42 0 0 9.46 9.53"
      }
    ],
    [
      "path",
      {
        "d": "M 15.44 17.63 L 15.28 17.04 L 5.75 14.29 L 12.41 2.93 L 21.41 14.64 L 8.27 17.03 L 15.30 7.99 L 20.00 20.24"
      }
    ]
  ]
};

export const ProprioJunction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.03 10.51 L 14.19 7.34 L 4.06 6.02 L 15.72 21.18 L 16.58 16.26" />
      <path d="M 6.21 11.40 C 6.00 15.46, 5.23 11.60, 9.13 3.42" />
      <path d="M 20.91 18.38 A 6.00 2.83 130 0 0 9.32 8.17" />
      <path d="M 4.51 9.53 A 4.06 4.82 42 0 0 9.46 9.53" />
      <path d="M 15.44 17.63 L 15.28 17.04 L 5.75 14.29 L 12.41 2.93 L 21.41 14.64 L 8.27 17.03 L 15.30 7.99 L 20.00 20.24" />
      {children}
    </svg>
  );
});

export default ProprioJunction;
