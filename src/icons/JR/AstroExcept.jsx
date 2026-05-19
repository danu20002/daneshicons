import React from 'react';

export const iconData = {
  "id": "AstroExcept",
  "name": "AstroExcept",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.21 12.00 Q 16.18 13.73 17.80 17.80"
      }
    ],
    [
      "path",
      {
        "d": "M 17.80 17.80 Q 13.73 16.18 12.00 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.21 Q 10.27 16.18 6.20 17.80"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 17.80 Q 7.82 13.73 3.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 12.00 Q 7.82 10.27 6.20 6.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 6.20 Q 10.27 7.82 12.00 3.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.79 Q 13.73 7.82 17.80 6.20"
      }
    ],
    [
      "path",
      {
        "d": "M 17.80 6.20 Q 16.18 10.27 20.21 12.00"
      }
    ]
  ]
};

export const AstroExcept = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.21 12.00 Q 16.18 13.73 17.80 17.80" />
      <path d="M 17.80 17.80 Q 13.73 16.18 12.00 20.21" />
      <path d="M 12.00 20.21 Q 10.27 16.18 6.20 17.80" />
      <path d="M 6.20 17.80 Q 7.82 13.73 3.79 12.00" />
      <path d="M 3.79 12.00 Q 7.82 10.27 6.20 6.20" />
      <path d="M 6.20 6.20 Q 10.27 7.82 12.00 3.79" />
      <path d="M 12.00 3.79 Q 13.73 7.82 17.80 6.20" />
      <path d="M 17.80 6.20 Q 16.18 10.27 20.21 12.00" />
      {children}
    </svg>
  );
});

export default AstroExcept;
