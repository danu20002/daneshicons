import React from 'react';

export const iconData = {
  "id": "DiabloCanal",
  "name": "DiabloCanal",
  "category": "YH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.61 12.00 Q 14.05 12.85 18.09 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 18.09 Q 12.85 14.05 12.00 20.61"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.61 Q 11.15 14.05 5.91 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 18.09 Q 9.95 12.85 3.39 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.39 12.00 Q 9.95 11.15 5.91 5.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 5.91 Q 11.15 9.95 12.00 3.39"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.39 Q 12.85 9.95 18.09 5.91"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 5.91 Q 14.05 11.15 20.61 12.00"
      }
    ]
  ]
};

export const DiabloCanal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.61 12.00 Q 14.05 12.85 18.09 18.09" />
      <path d="M 18.09 18.09 Q 12.85 14.05 12.00 20.61" />
      <path d="M 12.00 20.61 Q 11.15 14.05 5.91 18.09" />
      <path d="M 5.91 18.09 Q 9.95 12.85 3.39 12.00" />
      <path d="M 3.39 12.00 Q 9.95 11.15 5.91 5.91" />
      <path d="M 5.91 5.91 Q 11.15 9.95 12.00 3.39" />
      <path d="M 12.00 3.39 Q 12.85 9.95 18.09 5.91" />
      <path d="M 18.09 5.91 Q 14.05 11.15 20.61 12.00" />
      {children}
    </svg>
  );
});

export default DiabloCanal;
