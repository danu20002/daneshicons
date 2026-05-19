import React from 'react';

export const iconData = {
  "id": "XerofiloWolf",
  "name": "XerofiloWolf",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.99 12.00 Q 14.68 12.87 19.28 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 19.28 17.29 Q 13.66 14.28 14.78 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 14.78 20.55 Q 12.00 14.82 9.22 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 9.22 20.55 Q 10.34 14.28 4.72 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 4.72 17.29 Q 9.32 12.87 3.01 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.01 12.00 Q 9.32 11.13 4.72 6.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.72 6.71 Q 10.34 9.72 9.22 3.45"
      }
    ],
    [
      "path",
      {
        "d": "M 9.22 3.45 Q 12.00 9.18 14.78 3.45"
      }
    ],
    [
      "path",
      {
        "d": "M 14.78 3.45 Q 13.66 9.72 19.28 6.71"
      }
    ],
    [
      "path",
      {
        "d": "M 19.28 6.71 Q 14.68 11.13 20.99 12.00"
      }
    ]
  ]
};

export const XerofiloWolf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.99 12.00 Q 14.68 12.87 19.28 17.29" />
      <path d="M 19.28 17.29 Q 13.66 14.28 14.78 20.55" />
      <path d="M 14.78 20.55 Q 12.00 14.82 9.22 20.55" />
      <path d="M 9.22 20.55 Q 10.34 14.28 4.72 17.29" />
      <path d="M 4.72 17.29 Q 9.32 12.87 3.01 12.00" />
      <path d="M 3.01 12.00 Q 9.32 11.13 4.72 6.71" />
      <path d="M 4.72 6.71 Q 10.34 9.72 9.22 3.45" />
      <path d="M 9.22 3.45 Q 12.00 9.18 14.78 3.45" />
      <path d="M 14.78 3.45 Q 13.66 9.72 19.28 6.71" />
      <path d="M 19.28 6.71 Q 14.68 11.13 20.99 12.00" />
      {children}
    </svg>
  );
});

export default XerofiloWolf;
