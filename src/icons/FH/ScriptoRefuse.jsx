import React from 'react';

export const iconData = {
  "id": "ScriptoRefuse",
  "name": "ScriptoRefuse",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.71 12.00 Q 15.99 13.65 18.16 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 18.16 18.16 Q 13.65 15.99 12.00 20.71"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.71 Q 10.35 15.99 5.84 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 18.16 Q 8.01 13.65 3.29 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.29 12.00 Q 8.01 10.35 5.84 5.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 5.84 Q 10.35 8.01 12.00 3.29"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.29 Q 13.65 8.01 18.16 5.84"
      }
    ],
    [
      "path",
      {
        "d": "M 18.16 5.84 Q 15.99 10.35 20.71 12.00"
      }
    ]
  ]
};

export const ScriptoRefuse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.71 12.00 Q 15.99 13.65 18.16 18.16" />
      <path d="M 18.16 18.16 Q 13.65 15.99 12.00 20.71" />
      <path d="M 12.00 20.71 Q 10.35 15.99 5.84 18.16" />
      <path d="M 5.84 18.16 Q 8.01 13.65 3.29 12.00" />
      <path d="M 3.29 12.00 Q 8.01 10.35 5.84 5.84" />
      <path d="M 5.84 5.84 Q 10.35 8.01 12.00 3.29" />
      <path d="M 12.00 3.29 Q 13.65 8.01 18.16 5.84" />
      <path d="M 18.16 5.84 Q 15.99 10.35 20.71 12.00" />
      {children}
    </svg>
  );
});

export default ScriptoRefuse;
