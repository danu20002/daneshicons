import React from 'react';

export const iconData = {
  "id": "HaloWeld",
  "name": "HaloWeld",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.66 12.00 a 9.34 9.34 0 1 0 18.69 0 a 9.34 9.34 0 1 0 -18.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 7.33 a 8.09 2.4277439244397168 0 1 0 16.18 0 a 8.09 2.4277439244397168 0 1 0 -16.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.66 12.00 a 9.34 2.8033172165974976 0 1 0 18.69 0 a 9.34 2.8033172165974976 0 1 0 -18.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 16.67 a 8.09 2.4277439244397168 0 1 0 16.18 0 a 8.09 2.4277439244397168 0 1 0 -16.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.67 3.91 A 2 2 0 0 0 16.67 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 16.67 3.91 A 2 2 0 0 1 16.67 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 3.91 A 2 2 0 0 0 7.33 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 3.91 A 2 2 0 0 1 7.33 20.09"
      }
    ]
  ]
};

export const HaloWeld = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.66 12.00 a 9.34 9.34 0 1 0 18.69 0 a 9.34 9.34 0 1 0 -18.69 0" />
      <path d="M 3.91 7.33 a 8.09 2.4277439244397168 0 1 0 16.18 0 a 8.09 2.4277439244397168 0 1 0 -16.18 0" />
      <path d="M 2.66 12.00 a 9.34 2.8033172165974976 0 1 0 18.69 0 a 9.34 2.8033172165974976 0 1 0 -18.69 0" />
      <path d="M 3.91 16.67 a 8.09 2.4277439244397168 0 1 0 16.18 0 a 8.09 2.4277439244397168 0 1 0 -16.18 0" />
      <path d="M 16.67 3.91 A 2 2 0 0 0 16.67 20.09" />
      <path d="M 16.67 3.91 A 2 2 0 0 1 16.67 20.09" />
      <path d="M 7.33 3.91 A 2 2 0 0 0 7.33 20.09" />
      <path d="M 7.33 3.91 A 2 2 0 0 1 7.33 20.09" />
      {children}
    </svg>
  );
});

export default HaloWeld;
