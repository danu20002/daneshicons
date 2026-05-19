import React from 'react';

export const iconData = {
  "id": "PentaRigid",
  "name": "PentaRigid",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 12.00 a 7.94 7.94 0 1 0 15.87 0 a 7.94 7.94 0 1 0 -15.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 12.00 a 6.34 6.34 0 1 1 12.68 0 a 6.34 6.34 0 1 1 -12.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.44 12.00 L 21.44 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 16.78 L 19.23 18.07"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 19.32 L 13.64 21.29"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 18.44 L 7.28 20.17"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 14.54 L 3.13 15.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 9.46 L 3.13 8.77"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 5.56 L 7.28 3.83"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 4.68 L 13.64 2.71"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 7.22 L 19.23 5.93"
      }
    ]
  ]
};

export const PentaRigid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 12.00 a 7.94 7.94 0 1 0 15.87 0 a 7.94 7.94 0 1 0 -15.87 0" />
      <path d="M 5.66 12.00 a 6.34 6.34 0 1 1 12.68 0 a 6.34 6.34 0 1 1 -12.68 0" />
      <path d="M 19.44 12.00 L 21.44 12.00" />
      <path d="M 17.70 16.78 L 19.23 18.07" />
      <path d="M 13.29 19.32 L 13.64 21.29" />
      <path d="M 8.28 18.44 L 7.28 20.17" />
      <path d="M 5.01 14.54 L 3.13 15.23" />
      <path d="M 5.01 9.46 L 3.13 8.77" />
      <path d="M 8.28 5.56 L 7.28 3.83" />
      <path d="M 13.29 4.68 L 13.64 2.71" />
      <path d="M 17.70 7.22 L 19.23 5.93" />
      {children}
    </svg>
  );
});

export default PentaRigid;
