import React from 'react';

export const iconData = {
  "id": "ZirconeRipple",
  "name": "ZirconeRipple",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 12.00 a 8.06 8.06 0 1 0 16.11 0 a 8.06 8.06 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 12.00 a 5.97 5.97 0 1 1 11.95 0 a 5.97 5.97 0 1 1 -11.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.56 12.00 L 21.56 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 15.78 L 20.28 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 15.78 18.54 L 16.78 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.56 L 12.00 21.56"
      }
    ],
    [
      "path",
      {
        "d": "M 8.22 18.54 L 7.22 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 15.78 L 3.72 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 12.00 L 2.44 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 8.22 L 3.72 7.22"
      }
    ],
    [
      "path",
      {
        "d": "M 8.22 5.46 L 7.22 3.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.44 L 12.00 2.44"
      }
    ],
    [
      "path",
      {
        "d": "M 15.78 5.46 L 16.78 3.72"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 8.22 L 20.28 7.22"
      }
    ]
  ]
};

export const ZirconeRipple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 12.00 a 8.06 8.06 0 1 0 16.11 0 a 8.06 8.06 0 1 0 -16.11 0" />
      <path d="M 6.03 12.00 a 5.97 5.97 0 1 1 11.95 0 a 5.97 5.97 0 1 1 -11.95 0" />
      <path d="M 19.56 12.00 L 21.56 12.00" />
      <path d="M 18.54 15.78 L 20.28 16.78" />
      <path d="M 15.78 18.54 L 16.78 20.28" />
      <path d="M 12.00 19.56 L 12.00 21.56" />
      <path d="M 8.22 18.54 L 7.22 20.28" />
      <path d="M 5.46 15.78 L 3.72 16.78" />
      <path d="M 4.44 12.00 L 2.44 12.00" />
      <path d="M 5.46 8.22 L 3.72 7.22" />
      <path d="M 8.22 5.46 L 7.22 3.72" />
      <path d="M 12.00 4.44 L 12.00 2.44" />
      <path d="M 15.78 5.46 L 16.78 3.72" />
      <path d="M 18.54 8.22 L 20.28 7.22" />
      {children}
    </svg>
  );
});

export default ZirconeRipple;
