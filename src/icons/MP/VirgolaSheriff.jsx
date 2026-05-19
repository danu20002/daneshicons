import React from 'react';

export const iconData = {
  "id": "VirgolaSheriff",
  "name": "VirgolaSheriff",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.58 12.00 L 19.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.58 L 12.00 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 6.80 6.80 L 17.20 17.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.80 17.20 L 17.20 6.80"
      }
    ],
    [
      "path",
      {
        "d": "M 1.50 12.00 a 10.50 10.50 0 1 0 21.00 0 a 10.50 10.50 0 1 0 -21.00 0"
      }
    ]
  ]
};

export const VirgolaSheriff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.58 12.00 L 19.42 12.00" />
      <path d="M 12.00 4.58 L 12.00 19.42" />
      <path d="M 6.80 6.80 L 17.20 17.20" />
      <path d="M 6.80 17.20 L 17.20 6.80" />
      <path d="M 1.50 12.00 a 10.50 10.50 0 1 0 21.00 0 a 10.50 10.50 0 1 0 -21.00 0" />
      {children}
    </svg>
  );
});

export default VirgolaSheriff;
